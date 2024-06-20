import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Utils/firebase';
import { BackGround } from '../Utils/constants';

const Header = () => {
  const navigate=useNavigate();
  const handleSignOut= () =>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className='absolute px-8 py-2 w-screen bg-gradient-to-b from-black flex justify-between'>
        <img 
        className='w-44 '
        src={BackGround}
        alt='logo'
        />

        <button onClick={handleSignOut} className='font-bold text-white'>SignOut</button>
    </div>
  )
}

export default Header;