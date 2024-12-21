import axios from "axios";

const apiUrl = "http://localhost:8181/users";

export const login = async (email, password) => {
    const response = await axios.post(`${apiUrl}/login`, { email, password });
    return response.data;
};

export const googleLoginCallback = async (response) => {
    const token = response.credential;
    try {
        const response = await axios.post(
            apiUrl + "/google-login",
            { token }
        );
        console.log("App Token:", await response.data.appToken);
    } catch (error) {
        console.log(error.message);
    }
};