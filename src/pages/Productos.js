import { Link } from "react-router-dom";
import ProductosInicio from "../data";

function Productos(){
    
    return(
        <div>
            <h2>Productos</h2>
            <div>
                {ProductosInicio.map((producto)=>{
                    return(
                        <div className="card">
                            <div className="card-content">
                                <article key={producto.id}>
                                    <img src={producto.img} alt={producto.nombre}/>
                                    <h4 >{producto.nombre}</h4>
                                    <Link  to={`/productos/${producto.id}`}>Detalle</Link>
                                </article>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Productos;