import './App.css';
import Banner from './components/Header/Banner/Banner';
import NavBar from './components/Header/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <div className='App'>
      <NavBar/>
      <Banner/>
      {/* <ItemListContainer greeting="Ofertas de la semana"/> */}
      <ItemDetailContainer/>
    </div>
    </>
  );
}

export default App;
