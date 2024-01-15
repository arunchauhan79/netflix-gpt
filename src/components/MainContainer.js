import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector(state => state.movies?.nowPlayingMovies);
    const randomVal = Math.random() * (19 - 1) + 1;
    if (movies === null) return;
    const mainMovie = movies[Math.ceil(randomVal)];
    const { original_title, overview, id } = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer