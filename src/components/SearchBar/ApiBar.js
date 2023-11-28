import { useState } from "react";
import SearchImages from "./Api";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";





function ApiBar(){
    const [arrayImage, setArrayImage] = useState([]);

    const handleForSubmit = async (term)=>{
        let resultado = await SearchImages(term);
        setArrayImage(resultado);
    }

    return (
        <div>
            <SearchBar enSubmit={handleForSubmit}/>
            <ImageList images={arrayImage}/>
        </div>
    )
}

export default ApiBar;