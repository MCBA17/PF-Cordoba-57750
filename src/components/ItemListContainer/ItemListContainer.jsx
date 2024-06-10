import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams, useLocation } from "react-router-dom";
import logo from "../../images/goldenpalace1.png";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import Loading from "../Loading/Loading.jsx";
import Carousel from "../ItemListContainer/carousel.jsx";
import { Link } from "react-router-dom";

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
      <Carousel />
      <div className="title-container">
        <h1>
          Bienvenido/a a&nbsp;<span className="golden-palace">Golden Palace</span>
        </h1>
        <img src={logo} alt="logo" />
      </div>
      <div className="dropdown">
  <Link to="/" className="btn btn-secondary">Reiniciar Filtros</Link>
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Género
  </button>
  <ul class="dropdown-menu">
    <li><Link to="/genre/Masculino" class="dropdown-item" href="#">Masculino</Link></li>
    <li><Link to="/genre/Femenino" class="dropdown-item" href="#">Femenino</Link></li>
    <li><Link to="/genre/Genderless" class="dropdown-item" href="#">Unisex</Link></li>
  </ul>
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Marca
  </button>
  <ul class="dropdown-menu">
    <li><Link to="/brand/Rabanne" class="dropdown-item" href="#">Rabanne</Link></li>
    <li><Link to="/brand/Armani" class="dropdown-item" href="#">Armani</Link></li>
    <li><Link to="/brand/Jean Paul Gaultier" class="dropdown-item" href="#">Jean Paul Gaultier</Link></li>
    <li><Link to="/brand/Calvin Klein" class="dropdown-item" href="#">Calvin Klein</Link></li>
    <li><Link to="/brand/Carolina Herrera" class="dropdown-item" href="#">Carolina Herrera</Link></li>
  </ul>
</div>
      <div className="item-list-container">
        {loading ? <Loading /> : <ItemList products={products} />}
      </div>
    </>
  );
};

export default ItemListContainer;
