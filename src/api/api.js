import axios from "axios"
import { options } from "./apiOptions"


export const fetchFeatured = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    return response.data.results 
}

export const fetchDetails = async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
    return response.data
}

export const fetchCast = async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
    return response.data.cast
}

export const fetchReviews = async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options)
    return response.data.results
}

export const fetchSearch = async (searchQuery) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`, options)
    return response.data.results
}