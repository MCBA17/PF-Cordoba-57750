import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/data";
import { useParams } from "react-router-dom";
import logo from "../../images/goldenpalace1.png"


const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const { idBrand } = useParams()

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        if(idBrand){
          //filtrar la data por la categoria que almacena idCategory
          const productsFilter = respuesta.filter( (productRes)=> productRes.brand === idBrand )
          setProducts(productsFilter)
        }
        else{
          setProducts(respuesta);
          console.log(respuesta)
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Fin de la promesa");
      });
  }, [idBrand]);

  return (
    <>
    <div className="title-container">
      <h1>Bienvenido/a a&nbsp;<span className='golden-palace'>Golden Palace</span></h1>
      <img src={logo} alt="logo"/>
    </div>
    <div className="item-list-container">
      <ItemList products={products} />
    </div>
    </>
  );
};

export default ItemListContainer;







