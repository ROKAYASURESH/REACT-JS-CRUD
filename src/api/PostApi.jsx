import axios from "axios";


const api = axios.create({
	baseURL:"https://jsonplaceholder.typicode.com",
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	  }
});


// get method
export const getPosts = () => api.get("posts");

export const getDeletePost =(id) => api.delete(`posts/${id}`)

export const PostData = (post) => api.post("posts",post)
export const getPostById = (id) => api.get(`posts/${id}`) //PostData