import React from 'react';

const VideoTitle = () => {
  return (
    <div className='pt-[22%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r'>
      <h1 className='text-6xl font-bold text-black'>Breaking Bad</h1>
      <p className='py-6 text-lg w-1/4 text-black'>Breaking bad is aGood siries you can watch
        in the netflix. and jessy pinkman is a great actor 
        and also hiesanberg.
      </p>
      <div>
        <button className=' bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>
          ▶ Play
        </button >
        <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;