import React, { useEffect } from 'react'
import { auth } from './../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, PROFILE_PHOTO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSearchSlice';
import lang from './../utils/langauageContants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showGptSearch = useSelector(state => state.gptSearch.showGptSearch)
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate('/error')
        });
    }
    const handleGptSearch = () => {
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
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
            {user && <div className='flex p-2 gap-4'>
                {showGptSearch && <select className='m-5 bg-black p-2 text-white w-30 border-white rounded-md' onChange={handleLanguageChange}>
                    {
                        SUPPORTED_LANGUAGES.map(lg =>
                            <option key={lg.identifier} value={lg.identifier}>{lg.name}</option>
                        )
                    }

                </select>}
                <button className={`py-2 px-4 mx-4 my-2 text-white bg-purple-300 rounded-md`}
                    onClick={handleGptSearch}>
                    {showGptSearch ? "Home" : "GPT Search"}
                </button>
                <img className='w-8 h-8' src={PROFILE_PHOTO} alt="sign out icon" />
                <span className='text-nowrap cursor-pointer' onClick={handleSignOut}>(Sign out)</span>
            </div>}

        </div>
    )
}

export default Header