import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer';
import Producto from './components/main';
function App() { 
  return (
    <div>
      <NavBar/>
      <Producto/>
      <Footer/>
    </div>
  );
}
export default App;
