import axios from "axios";
const apiUrl = "https://localhost:7067";

export const getAllBikePosts = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/SellPost`);
        return response.data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const getBikePostById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/api/SellPost/${id}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const getBikePostByCategory = async (category) => {
    try {
        const response = await axios.get(`${apiUrl}/api/SellPost/posts/?category=${category}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const getBikePostsByPriceRange = async (minPrice, maxPrice) => {
    try {
        const response = await axios.get(`${apiUrl}/api/SellPost/filter/price/?minPrice=${minPrice}&maxPrice=${maxPrice}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const createBikePost = async (bikePost) => {
    try {
        const response = await axios.post(`${apiUrl}/api/SellPost`, bikePost);
        return response.data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const deleteBikePost = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/api/SellPost/${id}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const updateBikePost = async (id, bikePost) => {
    try {
        const response = await axios.put(`${apiUrl}/api/SellPost/${id}`, bikePost);
        return response.data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}