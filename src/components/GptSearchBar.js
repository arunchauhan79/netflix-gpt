import React, { useRef } from 'react'
import lang from '../utils/langauageContants'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'

const GptSearchBar = () => {
    const langConfig = useSelector((store) => store.langConfig.lang)
    const searchRef = useRef(null);

    const handleSearchButton = async () => {
        debugger

        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: searchRef.current.value }],
            model: 'gpt-3.5-turbo',
        });

        console.log(gptResult.choices)
    }
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-slate-700  grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchRef} type="text" className='p-4 m-4 col-span-9' placeholder={lang[langConfig].gptSearchPlaceholder}
                />
                <button className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg' onClick={handleSearchButton}>
                    {lang[langConfig].searchTxt}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar