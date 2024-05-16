const ItemDetail = ({ product }) => {
    return (
      <div className="item-detail d-flex align-items-center justify-content-center" style={{ marginTop: "8rem", marginRight: "15rem", }}>
        <div className="image-detail">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{ maxWidth: "600px" }}>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={product.image1} className="d-block w-100 img-fluid" alt="Product 1" style={{ maxHeight: "600px", objectFit: "cover", borderRadius: "5%"  }} />
              </div>
              <div className="carousel-item">
                <img src={product.image2} className="d-block w-100 img-fluid" alt="Product 2" style={{ maxHeight: "600px", objectFit: "cover", borderRadius: "5%"  }} />
              </div>
              <div className="carousel-item">
                <img src={product.image3} className="d-block w-100 img-fluid" alt="Product 3" style={{ maxHeight: "600px", objectFit: "cover", borderRadius: "5%"  }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="content-detail">
          <p className="name-detail">{product.name}</p>
          <p className="text-detail">{product.brand}</p>
          <p className="text-detail">${product.price}</p>
        </div>
      </div>
    );
  };
  
  export default ItemDetail;
  