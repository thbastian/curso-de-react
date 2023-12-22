import { useParams, Link } from "react-router-dom";
import ProductosInicio from "../data";


function Producto(){
    console.log(useParams());
    const {productoId} = useParams();
    const producto = ProductosInicio.find((producto)=>producto.id == productoId);
    console.log(producto);
    const {img,nombre,precio} = producto;

    return(
        <div className="card">
            <div className="card-content">
                <img  src={img}/>
            </div>
            <div className="card-content">
                <div>
                    <h2>{nombre}</h2>
                    <h2>{precio}</h2>
                    <Link to="/productos">Volver</Link>
                </div>
            </div>
        </div>
    )
}

export default Producto;