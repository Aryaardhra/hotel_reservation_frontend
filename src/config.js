import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://hotel-reservation-backend-91nz.onrender.com/api"
})