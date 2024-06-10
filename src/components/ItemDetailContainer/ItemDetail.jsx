import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const [ocultarCount, setOcultarCount] = useState(false);
  const { agregarProducto } = useContext(CartContext);

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count };
    agregarProducto(productCart);
    setOcultarCount(true);
  };

  function getClassForGenre(genre) {
    switch (genre) {
        case 'Masculino':
            return 'text-detail-masculino';
        case 'Femenino':
            return 'text-detail-femenino';
        case 'Genderless':
            return 'text-detail-genderless';
        default:
            return '';
    }
}

  return (
    <div
      className="item-detail d-flex align-items-center justify-content-center"
      style={{ marginTop: "8rem", marginRight: "15rem" }}
    >
      <div className="image-detail">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          style={{ maxWidth: "600px" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={product.image1}
                className="d-block w-100 img-fluid"
                alt="Product 1"
                style={{ maxHeight: "600px", objectFit: "cover", borderRadius: "5%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={product.image2}
                className="d-block w-100 img-fluid"
                alt="Product 2"
                style={{ maxHeight: "600px", objectFit: "cover", borderRadius: "5%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={product.image3}
                className="d-block w-100 img-fluid"
                alt="Product 3"
                style={{ maxHeight: "600px", objectFit: "cover", borderRadius: "5%" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="content-detail">
        <p className="name-detail">{product.name}</p>
        <p className="text-detail-brand">{product.brand}</p>
        <p className={`text-detail-genre ${getClassForGenre(product.genre)}`}>{product.genre}</p>
        <p className="text-detail">${product.price}</p>
        {ocultarCount ? (
          <div>
          <Link className="btn btn-outline-light" to="/cart">Ir al carrito</Link>
          <Link className="btn btn-outline-light" to="/">Seguir comprando</Link>
          </div>
        ) : (
          <ItemCount stock={product.stock} addProduct={addProduct} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
