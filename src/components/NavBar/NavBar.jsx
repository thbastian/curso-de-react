import { Link } from 'react-router-dom';



function NavBar(){
    return (
        <nav id="header">
                <h3>muebleria v</h3>
                <Link to="/">Inicio</Link>
                <Link to="mesas">Mesas</Link>
                <Link to="sillas">Sillas</Link>
                <Link to="productos">Productos</Link>
                <Link to="contactanos">Contactanos</Link>
                <Link to="carrito">Carrito: 0</Link>
        </nav>
    )
}
export default NavBar;