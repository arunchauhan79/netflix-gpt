import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-3xl font-bold '>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div>
                <button className='bg-white text-black p-2 px-8 text-xl rounded-md'>▶ Play</button>
                <button className='bg-gray-500 text-white p-2 px-8 text-xl rounded-md mx-2'>More info</button>
            </div>
        </div>
    )
}

export default VideoTitle