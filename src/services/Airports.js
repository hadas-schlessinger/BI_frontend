import axios from "axios";


export async function airports() {
    
    return await axios.post("/airports")      
}

