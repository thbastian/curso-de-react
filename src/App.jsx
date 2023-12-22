import './App.css';
import ItemListNavBar from './components/NavBar/ItemListNavBar';
import ApiBar from './components/SearchBar/ApiBar';
import Footer from './components/footer';


function App() { 
  return (
    <div>
      <ItemListNavBar/>
      <ApiBar/>
      <Footer/>
    </div>
  );
}
export default App;
