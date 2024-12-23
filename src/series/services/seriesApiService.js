import axios from "axios";

export const apiUrl = "http://localhost:8181/series";

export async function getSeries() {
    const response = await axios.get(apiUrl);
    return response.data;
}