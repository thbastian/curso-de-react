import ProfileCard from "./ProfileCard";
import silla03 from "../img/silla03.jpg"
import silla04 from "../img/silla04.jpg"
import sillon01 from "../img/sillon01.jpg"
import "bulma/css/bulma.css";
function Producto() {
    return (
        <div>
            <div className="container">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard titulo= "mueble de jardin" precio={2000} img={sillon01}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo= "muebles de cocina" precio={2000} img={silla04}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo= "sillon" precio={2000} img={silla03}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Producto;