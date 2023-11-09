function ProfileCard( props ){
    return (
        <div>
            <img src={props.img}/>
            <h3>{props.titulo}</h3>
            <p>{props.precio}</p>
        </div>
    )
}
export default ProfileCard;