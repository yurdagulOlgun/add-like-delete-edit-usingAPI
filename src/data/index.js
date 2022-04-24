import axios from "axios";

const BASE_AXIOS = axios.create({baseURL: "https://dummyjson.com"})

export const fetchUsers = (limit,q) => BASE_AXIOS.get(`/users/search?q=${q}&total=60&limit=${limit}`);
export const deleteUser = (id) => BASE_AXIOS.delete(`/users/${id}`);