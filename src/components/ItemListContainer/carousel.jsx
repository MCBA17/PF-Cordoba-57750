import React from 'react'
import armani from "../../images/armani.jpg"
import rabanne from "../../images/rabanne.jpg"
import calvinklein from "../../images/calvin-klein.jpg"

const Carrousel = () => {
  return (
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={armani} className="d-block w-100" alt="Armani Banner Image"></img>
    </div>
    <div class="carousel-item">
      <img src={rabanne} className="d-block w-100" alt="Paco Rabanne Banner Image"></img>
    </div>
    <div class="carousel-item">
      <img src={calvinklein} className="d-block w-100" alt="Calvin Klein Banner Image"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carrousel