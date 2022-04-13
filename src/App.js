import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar.js';
// import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
    <Navbar />
    {/* <ItemListContainer greeting="Hola Mundo ItemListContainer" /> */}
    <ItemDetailContainer />
    </>
  );
}

export default App;
