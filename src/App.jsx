import './App.css'
import NavBar from "./components/NavBar/NavBar"
import Footer from './components/Footer/Footer';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from './components/Cart/Cart';
import Checkout from "./components/Checkout/Checkout"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
    <header>
      <NavBar/>
      <ToastContainer theme="dark" />
    </header>
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/genre/:idGenre" element={ <ItemListContainer /> }/>
      <Route path="/brand/:idBrand" element={ <ItemListContainer /> } />
      <Route path="/detail/:nameProduct/:idProduct" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/> } />
    </Routes>
    <footer>
      <Footer/>
    </footer>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
