import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-32 mr-2' >
            <img alt='Movie card' src={IMG_CDN_URL + posterPath} />

        </div>
    )
}

export default MovieCard