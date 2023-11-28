import axios from "axios";

const SearchImages = async (term)=>{
    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization:"Client-ID _QJyjQfCtgd6Zb8k0h5QAJL-nLk2nh8DDBz5_YI2FaM"
        },
        params:{
            query:term
        }
    })
    return response.data.results
}

export default SearchImages;