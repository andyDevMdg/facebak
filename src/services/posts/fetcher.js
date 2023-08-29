import axios from "axios";

const fetch = axios.create({
    baseURL: "http://localhost:8080"
});

const getAllPosts = async () => {
    return await fetch.get("/posts")
}

const getPostComment = async (postId) => {
    return await fetch.get(`/posts/${postId}/comments`)
}

const getPostReaction = async (postId) => {
    return await  fetch.get(`/posts/${postId}/reactions`)
}

const postReaction = async (postId, postData) => {
    return await fetch.post(`/posts/${postId}/reactions`, postData) //postData ex : {type: 'LIKE', userId}
}

const postComment = async (postId,  comment, userId) => {
    return await fetch.put(`/posts/${postId}/comments`, {
        content: comment,
        userId: userId
    })
}

export {
    getAllPosts,
    getPostComment,
    getPostReaction,
    postReaction,
    postComment,
}