import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../data/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams()

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        const productFind = respuesta.find( (productRes) => productRes.id === idProduct );
        setProduct(productFind);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Fin de la promesa");
      });
  }, [idProduct]);

  return (
    <ItemDetail product={product} />
  );
};
export default ItemDetailContainer;
