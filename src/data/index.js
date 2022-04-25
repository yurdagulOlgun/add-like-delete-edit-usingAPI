import axios from "axios";

const BASE_AXIOS = axios.create({baseURL: "https://dummyjson.com"})

export const fetchUsers = (limit) => BASE_AXIOS.get(`/users?total=60&limit=${limit}`);