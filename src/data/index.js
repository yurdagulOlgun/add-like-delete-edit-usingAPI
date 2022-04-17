import axios from "axios";

const BASE_AXIOS = axios.create({baseURL: "https://dummyjson.com"})

export const fetchUsers = () => BASE_AXIOS.get(`/users`);