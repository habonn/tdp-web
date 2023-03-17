import React from 'react';
import {
  FaFacebookSquare,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';
import card from '../assets/card2.png';

const Footer = () => {
  return (
    // <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-col-4 gap-8 text-gray-300'>
    //   <div>
    //     <h1 className='w-full text-3xl font-bold text-[#f273dc]'>TEDDYPINK</h1>
    //     <p className='py-4 text-2xl'>
    //       403 หมู่1 ถ.เขาจีน ต.คลองขุด อ.เมือง จ.สตูล 91000
    //     </p>
    //     <p className='py-4 text-2xl font-bold'>081-5984714, 063-2042636</p>
    //     <p className='text-2xl font-bold'>Teddypinkproduction@gmail.com</p>
    //     <div className='flex justify-between md:w-[40%] my-6'>
    //       <a href='https://www.facebook.com/TeddyPinks11'>
    //         <FaFacebookSquare size={30} />
    //       </a>
    //       <FaInstagram size={30} />
    //       <a href='www.tiktok.com/@teddyproduction'>
    //         <FaTiktok size={30} />
    //       </a>
    //     </div>
    //   </div>
    //   <div>
    //     <img className='w-[500px] mx-auto my-4' src={scene3} alt='/' />
    //   </div>
    // </div>
    <div className='max-w-[1240px] mx-auto py-16 px-4 flex justify-center items-center lg:grid-cols-2 gap-4 text-gray-300'>
      <div className='p-4 align-middle'>
        <h1 className='w-full text-3xl font-bold text-[#f273dc]'>TEDDY PINK PRODUCTION</h1>
        <p className='py-4 text-2xl'>
          403 หมู่1 ถ.เขาจีน ต.คลองขุด อ.เมือง จ.สตูล 91000
        </p>
        <p className='py-4 text-2xl font-bold'>081-5984714, 063-2042636</p>
        <p className='text-2xl font-bold'>Teddypinkproduction@gmail.com</p>
        <div className='flex justify-between md:w-[30%] my-6'>
          <a href='https://www.facebook.com/TeddyPinks11' target="_blank" rel="noreferrer">
            <FaFacebookSquare size={30} />
          </a>
          {/* <FaInstagram size={30} /> */}
          <a href='www.tiktok.com/@teddyproduction' target="_blank" rel="noreferrer">
            <FaTiktok size={30} />
          </a>
          <a href='https://www.youtube.com/@TeddyPink11' target="_blank" rel="noreferrer">
            <FaYoutube size={30} />
          </a>
        </div>
      </div>
      <div className='p-4'>
        <img className='w-[500px] mx-auto my-4' src={card} alt='/' />
      </div>
    </div>
  );
};

export default Footer;
