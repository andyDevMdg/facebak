import axios from "axios";

const fetch = axios.create({
    baseURL: "http://localhost:8080"
});

const getAllUsers = async () => {
    const token = localStorage.getItem("token");
    return await fetch.get("/users", {
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
}

const getUserById = async (id) => {
    const token = localStorage.getItem("token");
    return await fetch.get(`/users/${id}`, {
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
}

const postUser = async (user) => {
    const token = localStorage.getItem("token");
    return await fetch.post("/users", user, {
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
}

const postLogin = async (userInfo) => {
    const token = localStorage.getItem("token");
    return await fetch.post("/users/login", userInfo, {
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
}
export {
    getAllUsers,
    getUserById,
    postLogin,
    postUser
}