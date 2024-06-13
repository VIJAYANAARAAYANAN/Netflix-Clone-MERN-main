

import { movieApiSlice } from "../api/movieApiSlice"


const apiKey = '7b41ef279cc2f1cee28ddd50bfbc6975';


export const genreApiSlice = movieApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMovieGenres: builder.query({
            query: () => `/genre/movie/list?api_key=${apiKey}`,
        })
    })
})


export const {
    useGetMovieGenresQuery
} = genreApiSlice