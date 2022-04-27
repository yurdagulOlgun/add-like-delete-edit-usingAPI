import axios from "axios";

export  const BASE_AXIOS = axios.create({baseURL: "https://dummyjson.com"})

export const fetchUsers = (limit) => BASE_AXIOS.get(`/users?total=60&limit=${limit}`);
// export const fetchUsers2 = () => axios.create({baseURL:BASE_AXIOS});