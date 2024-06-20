import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/appSlice';
import { auth } from '../Utils/firebase';

const Body = () => {
    const dispatch= useDispatch();

    const appRouter=createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid,displayName,emailId} = user.uid;
                dispatch(addUser({uid:uid,displayName:displayName, emailId:emailId}));
            
            } else {
                dispatch(removeUser());
            }
        });
    },[]);
   
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;