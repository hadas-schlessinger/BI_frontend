import axios from "axios";

export async function routes(airport) {
    const data = new FormData()
    data.append('airport', airport)
    return await axios.post("/routes", data)      
}
                 
    

