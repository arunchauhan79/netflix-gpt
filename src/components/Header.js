import React from 'react'
import { auth } from './../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            navigate('/error')
        });
    }
    return (
        <div className='absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between'>
            <img className='w-44 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='logo' />
            {user && <div className='flex p-4 gap-4'>
                <img className='w-8 h-8' src={user?.photoURL} alt="sign out icon" />
                <span className='text-nowrap cursor-pointer' onClick={handleSignOut}>(Sign out)</span>
            </div>}

        </div>
    )
}

export default Header