import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    return (
        <div className='bg-black'>
            <div className='-mt-52 pl-12 relative z-100'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
                <MovieList title={"Actions"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Fiction"} movies={movies.nowPlayingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer