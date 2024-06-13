import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetMovieGenresQuery } from './genreApiSlice';
import { setGenres } from './genreSlice';

const GenreInitializer = () => {
    const dispatch = useDispatch();
    const {data, error, isLoading} = useGetMovieGenresQuery();

    useEffect(()=> {
        if(!isLoading && !error){
            dispatch(setGenres(data.genres))
        }
    }, [isLoading, error, data])

  return null
}

export default GenreInitializer