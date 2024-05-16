import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <header>
      <NavBar/>
    </header>
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/genre/:idGenre" element={ <ItemListContainer /> }/>
      <Route path="/detail/:nameProduct/:idProduct" element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
