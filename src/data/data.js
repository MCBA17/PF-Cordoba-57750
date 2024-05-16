
const products = [
    {
      id: "1",
      name: "LE MALE LOVER EDP 125ML E.L.",
      genre: "Masculino",
      brand: "Jean Paul Gaultier",
      price: 150000,
      stock: 11,
      image1: "/src/images/productImages/i1-1.jpg",
      image2: "/src/images/productImages/i1-2.jpg",
      image3: "/src/images/productImages/i1-3.jpg"
    },
    {
      id: "2",
      name: "DEFY EDT 100ML",
      genre: "Masculino",
      brand: "Calvin Klein",
      price: 125000,
      stock: 14,
      image1: "/src/images/productImages/i2-1.jpg",
      image2: "/src/images/productImages/i2-2.jpg",
      image3: "/src/images/productImages/i2-3.jpg"
    },
    {
      id: "3",
      name: "MY WAY EDP 90ML",
      genre: "Femenino",
      brand: "Armani",
      price: 181000,
      stock: 7,
      image1: "/src/images/productImages/i3-1.jpg",
      image2: "/src/images/productImages/i3-2.jpg",
      image3: "/src/images/productImages/i3-3.jpg"
    },
    {
      id: "4",
      name: "OLYMPEA SOLAR EDP INTENSE 80ML",
      genre: "Femenino",
      brand: "Rabanne",
      price: 133000,
      stock: 4,
      image1: "/src/images/productImages/i4-1.jpg",
      image2: "/src/images/productImages/i4-2.jpg",
      image3: "/src/images/productImages/i4-3.jpg"
    },
    {
      id: "5",
      name: "EVERYONE EDP 100ML",
      genre: "Genderless",
      brand: "Rabanne",
      price: 123800,
      stock: 4,
      image1: "/src/images/productImages/i5-1.jpg",
      image2: "/src/images/productImages/i5-2.jpg",
      image3: "/src/images/productImages/i5-3.jpg"
    }
  ]

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 1500);
    });
  };

  export default getProducts