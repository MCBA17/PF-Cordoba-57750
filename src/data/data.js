function RandomId() {
    return Math.random().toString(36).substr(2, 9);
  }

const sizes = [35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44, 44.5, 45, 45.5]

const products = [
    {
      id: RandomId(),
      name: "Zapatillas Nike Air Zoom Pegasus 39",
      brand: "Nike",
      price: 125999,
      stock: 11,
      size: sizes,
      image1: "/images/productImages/i1-1.jpg",
      image2: "/images/productImages/i1-2.jpg",
      image3: "/images/productImages/i1-3.jpg"
    },
    {
      id: RandomId(),
      name: "Zapatillas Topper Split",
      brand: "Topper",
      price: 43200,
      stock: 14,
      size: sizes,
      image1: "/images/productImages/i2-1.jpg",
      image2: "/images/productImages/i2-2.jpg",
      image3: "/images/productImages/i2-3.jpg"
    },
    {
      id: RandomId(),
      name: "Zapatillas Nike Revolution 6 Nn",
      brand: "Nike",
      price: 62000,
      stock: 7,
      size: sizes,
      image1: "/images/productImages/i3-1.jpg",
      image2: "/images/productImages/i3-2.jpg",
      image3: "/images/productImages/i3-3.jpg"
    },
    {
      id: RandomId(),
      name: "Zapatillas Adidas Questar",
      brand: "Adidas",
      price: 84000,
      stock: 4,
      size: sizes,
      image1: "/images/productImages/i4-1.jpg",
      image2: "/images/productImages/i4-2.jpg",
      image3: "/images/productImages/i4-3.jpg"
    }
  ]

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 3000);
    });
  };
  
  export default getProducts