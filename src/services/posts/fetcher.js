import axios from "axios";

const fetch = axios.create({
    baseURL: "http://localhost:8080"
});

const getAllPosts = async () => {
    const token = localStorage.getItem("token");
    return await fetch.get("/posts", {
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
}

const getPostComment = async (postId) => {
    const token = localStorage.getItem("token");
    return await fetch.get(`/posts/${postId}/comments`, {
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
}

const getPostReaction = async (postId) => {
    const token = localStorage.getItem("token");
    return await  fetch.get(`/posts/${postId}/reactions`, {
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
}

const postReaction = async (postId, postData) => {
    const token = localStorage.getItem("token");
    return await fetch.post(`/posts/${postId}/reactions`, postData, {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }) //postData ex : {type: 'LIKE', userId}
}

const postComment = async (postId, comment, userId) => {
    const token = localStorage.getItem("token");
    return await fetch.put(`/posts/${postId}/comments`, {
        content: comment,
        userId: userId
    }, {
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
}

export {
    getAllPosts,
    getPostComment,
    getPostReaction,
    postReaction,
    postComment,
}