import './App.css';
import NavBar from './components/NavBar/NavBar';
import ApiBar from './components/SearchBar/ApiBar';
import Footer from './components/footer';
import Producto from './components/main';

function App() { 
  return (
    <div>
      <NavBar/>
      <ApiBar/>
      <h1 id= "ti"className='title'>Nuestros Productos:</h1>
      <Producto/>
      <Footer/>
    </div>
  );
}
export default App;
