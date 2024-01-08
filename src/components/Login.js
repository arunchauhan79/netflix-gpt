import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div>
                <img className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='background-image' />
            </div>
            <form className='w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white opacity-85 rounded-md'>
                <h1 className='text-2xl pb-6'> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}
                <input type='email' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />

                <button className='p-4 my-6 rounded-lg bg-red-700 w-full'>Sign In</button>
                <p className='cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Member? Sing In"}</p>
            </form>
        </div>
    )
}

export default Login