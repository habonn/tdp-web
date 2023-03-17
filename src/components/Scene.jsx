import { useState, useEffect } from 'react';
import Carousel from './Carousel';

// import scene1 from '../assets/scene1.jpg';
// import scene2 from '../assets/scene2.jpg';
// import scene3 from '../assets/scene3.jpg';

const Scene = () => {
  const [videoId, setVideoId] = useState('');

  const slides = [
    'https://i.ibb.co/ncrXc2V/1.png',
    'https://i.ibb.co/B3s7v4h/2.png',
    'https://i.ibb.co/XXR8kzF/3.png',
    'https://i.ibb.co/yg7BSdM/4.png',
  ];

  useEffect(() => {
    const videoIds = ['yOs77TQYX-8', 'cnaPVj6Kmw0', 'DjWSpqDp8Eo'];
    const randomIndex = Math.floor(Math.random() * videoIds.length);
    const newVideoId = videoIds[randomIndex];
    setVideoId(newVideoId);
  }, []);

  return (
    <div className='w-fullpy-16 px-4'>
      <div className='bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
          {/* <img className='w-[500px] mx-auto my-4' src={scene1} alt='/' /> */}
          <Carousel>
            {slides.map((s) => (
              <img src={s} alt='/' />
            ))}
          </Carousel>
          <div className='flex flex-col ml-5 justify-center'>
            <p className='text-[#f273dc] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
              Manage Data Analytics Centrally
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum molestiae delectus culpa hic assumenda, voluptate
              reprehenderit dolore autem cum ullam sed odit perspiciatis.
              Doloribus quos velit, eveniet ex deserunt fuga?
            </p>
            <button className='bg-black text-[#f273dc] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className='bg-black text-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
          <div className='flex flex-col ml-5 justify-center'>
            <p className='text-[#f273dc] font-bold'>E-COMMERCE PLATFORM</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
              Create Your Online Store in Minutes
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum molestiae delectus culpa hic assumenda, voluptate
              reprehenderit dolore autem cum ullam sed odit perspiciatis.
              Doloribus quos velit, eveniet ex deserunt fuga?
            </p>
            <button className='bg-white text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
              Get Started
            </button>
          </div>

          {/* <img className='w-[500px] mx-auto my-4 cursor-pointer' src={scene2} alt='/' /> */}
          <iframe
            width='560'
            height='315'
            src={`https://www.youtube.com/embed/${videoId}`}
            title='YouTube video player'
            // frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* <div className='bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
          <img className='w-[500px] mx-auto my-4' src={scene3} alt='/' />
          <div className='flex flex-col ml-5 justify-center'>
            <p className='text-[#f273dc] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
              Manage Data Analytics Centrally
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum molestiae delectus culpa hic assumenda, voluptate
              reprehenderit dolore autem cum ullam sed odit perspiciatis.
              Doloribus quos velit, eveniet ex deserunt fuga?
            </p>
            <button className='bg-black text-[#f273dc] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
              Get Started
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Scene;
