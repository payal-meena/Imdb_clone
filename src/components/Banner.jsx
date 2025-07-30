import React from 'react'
import { useState , useEffect } from 'react';
function Banner() {
const banners = [
  {
    title: "Avengers: Endgame",
    img: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
  },
  {
    title: "Interstellar",
    img: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    title: "Avatar: The Way of Water",
    img: "https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
  },
  {
    title: "Avengers: Infinity War",
    img: "https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
  },
];

const [banner, setBanner] = useState(banners[0]);

useEffect(() => {
    const random = Math.floor(Math.random() * banners.length);
    setBanner(banners[random]);
  }, []);

  return (
    <div className='h-[80vh] bg-center bg-cover flex items-end 'style={{backgroundImage:`url(${banner.img})`}}>
        <div className='text-white text-xl text-center w-full bg-gray-900/60 p-2 font-semibold'> {banner.title}</div>
    </div>
  )
}

export default Banner