import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams, useLocation } from "react-router-dom";
import logo from "../../images/goldenpalace1.png";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import Loading from "../Loading/Loading.jsx";
import Carousel from "../ItemListContainer/carousel.jsx";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idGenre, idBrand } = useParams();
  const location = useLocation();

  const getProducts = () => {
    setLoading(true);
    const productsRef = collection(db, "products");
    getDocs(productsRef)
      .then((productsDb) => {
        const data = productsDb.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setProducts(data);
      })
      .finally(() => setLoading(false));
  };

  const getProductsByGenre = () => {
    setLoading(true);
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("genre", "==", idGenre));
    getDocs(q)
      .then((productsDb) => {
        const data = productsDb.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setProducts(data);
      })
      .finally(() => setLoading(false));
  };

  const getProductsByBrand = () => {
    setLoading(true);
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("brand", "==", idBrand));
    getDocs(q)
      .then((productsDb) => {
        const data = productsDb.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setProducts(data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (idGenre) {
      getProductsByGenre();
    } else if (idBrand) {
      getProductsByBrand();
    } else {
      getProducts();
    }
  }, [idGenre, idBrand]);

  return (
    <>
      <div className="title-container">
        <h1>
          Bienvenido/a a&nbsp;<span className="golden-palace">Golden Palace</span>
        </h1>
        <img src={logo} alt="logo" />
      </div>
      <Carousel />
      <div className="item-list-container">
        {loading ? <Loading /> : <ItemList products={products} />}
      </div>
    </>
  );
};

export default ItemListContainer;
