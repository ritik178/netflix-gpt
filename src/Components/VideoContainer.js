import React from 'react'
import YouTube from 'react-youtube';

const VideoContainer = () => {
  const videoId="https://youtu.be/1JLUn2DFW4w?si=XUVyuT0PuGG5IY5P";

  
  return (
    <div className='w-full-screen aspect-video  '>
      <div className='video'>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/${videoid}"}
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default VideoContainer;