import { useState } from "react";

function SearchBar({enSubmit}){
    const [term, setTerm] = useState("");

    function handleForSubmit(e){
        e.preventDefault();
        enSubmit(term);
    }

    function handleChange(e){
        setTerm(e.target.value);
    }

    return(
        <div>
            <form onSubmit={handleForSubmit}>
                <input value={term} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default SearchBar;