import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "http://localhost:5292",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
})