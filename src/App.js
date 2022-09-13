import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting="Ofertas de la semana"/>
    </div>
    </>
  );
}

export default App;
