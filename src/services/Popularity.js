import axios from "axios";

export async function popularity() {
    return await axios.post("/popularity")     
}