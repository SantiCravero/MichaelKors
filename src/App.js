import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Header/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Explora nuestro catálogo" />}/>

          <Route path="/categoria/:cat" element={<ItemListContainer greeting="Resultado de la búsqueda" />} />

          <Route path="/cat/:id" element={<ItemDetailContainer />} />

          {/* <Route path="*" element={
            
          }/> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
