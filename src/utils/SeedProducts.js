import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
    {
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

const seedProducts = () => {
  products.map(({ id, ...rest }) =>{
    addDoc(collection(db, "products"), rest)
  });
  return
}

seedProducts()