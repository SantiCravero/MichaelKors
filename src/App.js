import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Header/NavBar";
import Error from "./components/Error/Error";
import MyProvider from "./context/CartContext";
import CartView from "./components/CartView/CartView";
import CheckOutForm from "./components/CheckOut/CheckOutForm/CheckOutForm";
import CheckOut from "./components/CheckOut/CheckOut";
import SingIn from "./components/SingIn/SingIn";
import Opportunities from "./components/Opportunities/Opportunities";
import Contact from "./components/Contact/Contact";
import BannerCategory from "./components/ItemListContainer/BannerCategory/BannerCategory";
import CategoryList from "./components/ItemListContainer/CategoryList/CategoryList";

function App() {
  return (
    <>
      <MyProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>

            <Route path="/singin" element={ <SingIn /> }/>
            <Route path="/oportunidades" element={ <Opportunities /> } />
            <Route path="/contacto" element={<Contact /> } />
            <Route path="/" element={<ItemListContainer greeting="Explora nuestro catálogo" />}/>
            <Route path="/categoria/:cat" element={<ItemListContainer />} />
            <Route path="/categoria/colecciones" element={<BannerCategory />} />
            <Route path="/cat/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />

            <Route path="/checkout/pay" element={<CheckOutForm />} />
            <Route path="/checkout/:orderid" element={<CheckOut />}/>

            <Route path="*" element={ <Error/> }/>
            
          </Routes>
          <Footer/>
        </BrowserRouter>
      </MyProvider>
    </>
  );
}

export default App;
