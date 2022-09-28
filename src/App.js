import "./App.css";
import NavBar from "./components/Header/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Explora nuestro catálogo" />}/>

          <Route path="/categoria/:cat" element={<ItemListContainer greeting="Resultado de la búsqueda" />} />

          <Route path="/cat/:id" element={<ItemDetailContainer />} />

          {/* <Route path="*" element={
            
          }/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
