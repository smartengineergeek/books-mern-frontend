import axios from 'axios';

let baseURL = process.env.NODE_ENV  === 'production' ?"https://books-mern-app.herokuapp.com/": 'http://localhost:3000/api';

const api = axios.create({
    baseURL: baseURL
})

export const insertBook = payload => api.post(`/book`, payload)
export const getAllBooks = () => api.get(`/books`)
export const updateBookById = (id, payload) => api.put(`/book/${id}`, payload)
export const deleteBookById = id => api.delete(`/book/${id}`)
export const getBookById = id => api.get(`/book/${id}`)

const apis = { insertBook, getAllBooks, updateBookById, deleteBookById, getBookById };

export default apis;