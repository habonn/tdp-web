import React from 'react';
import Typed from 'react-typed';
import videoBg from '../assets/Reel.mp4';

const Hero = () => {
  return (
    <div className='max-w-[1366px] mt-[30px] h-screen flex flex-col lg:flex-row mx-auto text-white'>
      <div className='lg:w-2/4 grid content-center'>
        <h1 className='text-[#f273dc] md:text-5xl sm:text-6xl text-4xl font-bold md:py-6'>
          TEDDYPINK
        </h1>
        <h3 className=' font-bold p-2'>PRODUCTION</h3>
        <div className='flex'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
            เราทำทุกอย่าง <br />
            เกี่ยวกับโปรดักชั่น ทั้ง
            <Typed
              className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
              strings={['วีดีโอ', 'ภาพนิ่ง', 'ตัดต่อ']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
      </div>
      <div className='lg:w-3/4'>
        <video src={videoBg} className='w-[100%] h-[80vh] object-cover rounded-3xl' autoPlay loop muted />
      </div>
    </div>

    // <div className='landing max-w-[1420px] mx-auto px-4 text-white'>
    //   <div className='overlay'></div>
    //   <div style={{ float: 'right' }}>
    //     <video src={videoBg} className='video-bg' autoPlay loop muted />
    //   </div>
    //   <div className='content'>
    //     <h1 className='text-[#f273dc] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
    //       TEDDYPINK
    //     </h1>
    //     <h3 className=' font-bold p-2'>PRODUCTION</h3>
    //     <div className='flex justify-center items-center'>
    //       <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
    //         เราทำทุกอย่าง <br />
    //         เกี่ยวกับโปรดักชั่น ทั้ง
    //         <Typed
    //           className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
    //           strings={['วีดีโอ', 'ภาพนิ่ง', 'ตัดต่อ']}
    //           typeSpeed={120}
    //           backSpeed={140}
    //           loop
    //         />
    //       </p>
    //     </div>
    //     {/* <p className='md:text-2xl text-xl font-bold text-gray-500'>
    //       Monitor your data analytics to increase revenue for BTB, BTC, & SASS
    //       platforms.
    //     </p> */}
    //     {/* <button className='bg-[#f273dc] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
    //       Get Started
    //     </button> */}
    //   </div>
    // </div>
  );
};

export default Hero;
