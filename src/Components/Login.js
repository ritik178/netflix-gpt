import { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../Utils/validate';
import { createUserWithEmailAndPassword,
   signInWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { PhotoUrl, logo } from '../Utils/constants';
const Login = () => {

  const [isSignForm, setSignInForm ] = useState(true);
  const [errorMessege, setErrorMessege]=useState(null);

  const navigate=useNavigate();
  const name=useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {

     const massege=checkValidData(email.current.value, password.current.value);
     setErrorMessege(massege);
     if(massege) return;

     if(!isSignForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
         
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: PhotoUrl,
        }).then(() => {
          navigate("/browse");
        }).catch((error) => {
          navigate("/error");
        });
        console.log(user)
        
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessege(errorMessage+"-"+errorCode);
  });

     }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessege(errorCode+"-"+errorMessage);
  });

     }
  }; 

  const toggleSignInForm=()=>{
    setSignInForm(!isSignForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
      <img
         src={logo}
         alt='logo'
         />
         </div>
         <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-60'>
         <h1 className='font-bold text-3xl py-4'>
          {isSignForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignForm && (
            <input
           type='text' placeholder='Full Name' 
          className='p-2 my-2 w-full bg-gray-700' />)}
            {!isSignForm && (
            <input
           type='text' placeholder='Mobile Number' 
          className='p-2 my-2 w-full bg-gray-700' />)}
          <input
          ref={email}
           type='text' placeholder='Email Address' 
          className='p-2 my-2 w-full bg-gray-700' />
          <input
          ref={password}
           type='password' placeholder='PassWord' 
          className='p-2 my-2 w-full bg-gray-700' />
          <p className='text-red-500 font-bold text-lg py-2'>{errorMessege}</p>
            {!isSignForm && (
            <input
           type='text' placeholder='Confirm Password' 
          className='p-2 my-2 w-full bg-gray-700' />)}
          <button 
           className='p-4 my-4 w-full bg-red-600' onClick={handleButtonClick}>
            {isSignForm ? "Sign In" : "Sign Up"}
          </button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignForm ? "New To NetFlix? Please! Sign Up" : "Already Registered! Go Back"}
          </p>
         </form>
    </div>
  );
};

export default Login;