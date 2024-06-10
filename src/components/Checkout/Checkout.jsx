import { useState, useContext } from "react";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import db from "../../db/db.js";
import validateForm from "../../utils/ValidationYup.js";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import Formulario from "./Formulario";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
  const [datosForm, setDatosForm] = useState({ name: "", phone: "", email: "", confirmEmail: "" });
  const [idOrden, setIdOrden] = useState(null);
  const [loading, setLoading] = useState(false);
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Se enviará tu orden. ¿Estás seguro de continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviar orden',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await validateForm(datosForm);
          if (response.status === "success") {
            const orden = {
              comprador: datosForm,
              productos: carrito,
              fecha: Timestamp.fromDate(new Date()),
              total: precioTotal(),
            };
            await generateOrder(orden);
          } else {
            Swal.fire({ title: "Ocurrió un error", text: (response.message), icon: "error" });
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    });
  };
  
  const generateOrder = async (orden) => {
    const ordenesRef = collection(db, "orders");
    try {
      const respuesta = await addDoc(ordenesRef, orden);
      setIdOrden(respuesta.id);
      await updateStock();
      vaciarCarrito();

      toast.success('¡Orden enviada con éxito!');
    } catch (error) {
      console.error(error);
    }
  };  

  const updateStock = async () => {
    try {
      await Promise.all(carrito.map(async (productoCarrito) => {
        const { quantity, ...productoSinCantidad } = productoCarrito;
        const productoRef = doc(db, "products", productoSinCantidad.id);
        await setDoc(productoRef, { ...productoSinCantidad, stock: productoSinCantidad.stock - quantity });
      }));
      console.log("Stock actualizado correctamente");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="checkout">
      {loading ? (
        <Loading/>
      ) : idOrden ? (
        <div className="order-container">
          <h2>Orden enviada con éxito</h2>
          <p>Orden id: {idOrden}</p>
          <Link to={"/"} className="checkout-button">Volver a la tienda</Link>
        </div>
      ) : (
        <Formulario
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;
