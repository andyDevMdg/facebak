import axios from "axios";

const fetch = axios.create({
    baseURL: "http://localhost:8080"
});
const getAllUsers = async () => {
    return await fetch.get("/users");
}

const getUserById = async (id) => {
    return await fetch.get(`/users/${id}`)
}

const postUser = async (user) => {
    return await fetch.post("/users", user);
}

const postLogin = async (userInfo) => {
    return await fetch.post("/users/login", userInfo)
}
export {
    getAllUsers,
    getUserById,
    postLogin,
    postUser
}