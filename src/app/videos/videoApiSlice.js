import { movieApiSlice } from "../api/movieApiSlice"

export const videoApiSlice = movieApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: (movieId) => `/movie/${movieId}/videos`
        })
    })
})

export const {useGetVideosQuery} = videoApiSlice