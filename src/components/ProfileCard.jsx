import { useState } from "react";

function ProfileCard( props ){
    
    const [ count, setCount ]= useState(0);

    function handleClickSuma(){
        setCount( count + 1);
    }
    
    function handleClickResta(){
        if( count > 0){
            setCount( count - 1);
        }
    }
    
    return (
            <div className="card">
                <div className="card-img">
                    <figure className="image is-1by1">
                        <img src={props.img} alt="logo"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">{props.titulo}</p>
                        <p className="subtitle is-6">${props.precio}</p>
                    </div>
                    <div>
                        <button onClick= {handleClickSuma}>+</button>
                        <button onClick= {handleClickSuma} id="agregar">agregar</button>
                        <button onClick= {handleClickResta}>-</button>
                    </div>
                    <p>cantidad: {count}</p>
                </div>
            </div>
    )
}
export default ProfileCard;