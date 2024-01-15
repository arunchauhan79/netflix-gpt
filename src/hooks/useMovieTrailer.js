import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getTrailerOfMovie = async () => {

        const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
        const movieTrailer = await movie.json();
        const trailer = movieTrailer?.results?.filter(video => video.type === 'Trailer')
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(() => {
        getTrailerOfMovie();
    }, [])

}

export default useMovieTrailer