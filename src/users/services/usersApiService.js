import axios from "axios";

const apiUrl = "http://localhost:8181/users";

export const getUserByEmail = async (email) => {
    try {
        const response = await axios.get(`${apiUrl}/${email}`);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${apiUrl}/login`, { email, password });
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const register = async (userData) => {
    try {
        const { email, password, image } = userData;
        const response = await axios.post(apiUrl, { email, password, image });
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const googleLoginCallback = async (response) => {
    const token = response.credential;

    try {
        const response = await axios.post(
            apiUrl + "/google-login",
            { token }
        );
        return await response.data;
    } catch (error) {
        console.log(error.message);
    }
};

export const handleUpload = async (data) => {
    try {
        if (!data.imageUpload) {
            throw new Error("No file selected!");
        }

        const formData = new FormData();
        formData.append("imageUpload", data.imageUpload);
        formData.append("email", data.email);

        const response = await axios.post(apiUrl + "/image-upload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};