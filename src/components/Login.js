import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import Header from './Header'
import { checkValidData } from '../utils/validation'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState("")
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick = () => {
        if (!isSignInForm) {
            const name = nameRef.current.value;
            if (name === "") {
                setErrorMsg("Please enter valid name");
                return;
            }
        }
        const emailVal = emailRef.current.value;
        const passwordVal = passwordRef.current.value;
        const nameVal = nameRef?.current?.value;

        const message = checkValidData(emailVal, passwordVal);
        setErrorMsg(message);
        if (message != null) {
            return;
        } else {
            if (!isSignInForm) {
                createUserWithEmailAndPassword(auth, emailVal, passwordVal)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        updateProfile(user, {
                            displayName: nameVal, photoURL: "https://i.pravatar.cc/150?img=59"
                        }).then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

                            navigate('/browse');
                        }).catch((error) => {
                            setErrorMsg(error.message)
                        });
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMsg(errorCode + ' ' + errorMessage)
                        // ..
                    });
            } else {
                signInWithEmailAndPassword(auth, emailVal, passwordVal)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        navigate('/browse');

                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMsg(errorCode + ' ' + errorMessage)

                    });

            }
        }
    }
    return (
        <div>
            <Header />
            <div>
                <img className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='background-image' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white opacity-85 rounded-md'>
                <h1 className='text-2xl pb-6'> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type='text' ref={nameRef} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}
                <input type='email' ref={emailRef} placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                <input type='password' ref={passwordRef} placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                <p className='text-red-500 text-lg font-bold py-2'>{errorMsg}</p>
                <button className='p-4 my-6 rounded-lg bg-red-700 w-full' onClick={handleButtonClick}> {isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Member? Sing In"}</p>
            </form>
        </div>
    )
}

export default Login