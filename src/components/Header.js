import React, { useEffect } from 'react'
import { auth } from './../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, PROFILE_PHOTO } from '../utils/constants';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate('/error')
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate('/browse');
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/');

            }
        });
        return () => unsubscribe();
    }, [])
    return (
        <div className='absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between'>
            <img className='w-44 ' src={LOGO}
                alt='logo' />
            {user && <div className='flex p-4 gap-4'>
                <img className='w-8 h-8' src={PROFILE_PHOTO} alt="sign out icon" />
                <span className='text-nowrap cursor-pointer' onClick={handleSignOut}>(Sign out)</span>
            </div>}

        </div>
    )
}

export default Header