import React from 'react';

const Contact = () => {
  return (
    // <div className='w-full py-16 text-white px-4'>
    //   <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
    //     <div className='lg:col-span-2 my-4'>
    //       <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
    //         Want tips & tricks to optimize your flow?
    //       </h1>
    //       <p>Sign up to our newsletter and stay up to date.</p>
    //     </div>
    //     <div className='my-4'>
    //       <div className='w-full max-w-md mx-auto'>
    //         <form className='bg-opacity-75 bg-bubble rounded-full shadow-md px-8 pt-6 pb-8 mb-4'>
    //           <div className='mb-4'>
    //             <label className='block text-pink-500 font-bold mb-2' for='name'>
    //               Name
    //             </label>
    //             <input
    //               className='appearance-none bg-gray-700 bg-opacity-50 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
    //               id='name'
    //               type='text'
    //               placeholder='Enter your name'
    //             />
    //           </div>
    //           <div className='mb-4'>
    //             <label className='block text-pink-500 font-bold mb-2' for='email'>
    //               Email
    //             </label>
    //             <input
    //               className='appearance-none bg-gray-700 bg-opacity-50 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
    //               id='email'
    //               type='email'
    //               placeholder='Enter your email'
    //             />
    //           </div>
    //           <div className='mb-4'>
    //             <label className='block text-pink-500 font-bold mb-2' for='comment'>
    //               Comment
    //             </label>
    //             <textarea
    //               className='appearance-none bg-gray-700 bg-opacity-50 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
    //               id='comment'
    //               rows='5'
    //               placeholder='Enter your comment'
    //             ></textarea>
    //           </div>
    //           <div className='flex items-center justify-between'>
    //             <button
    //               className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
    //               type='button'
    //             >
    //               Submit
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='relative w-full py-8 text-white px-4'>
      <div className='-z-1 absolute bottom-0 left-0 right-0'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#ED64A6'
            fillOpacity='1'
            d='M0,128L48,122.7C96,117,192,107,288,128C384,149,480,203,576,202.7C672,203,768,149,864,122.7C960,96,1056,96,1152,117.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div className='relative max-w-[1240px] mx-auto grid lg:grid-cols-3 z-10'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='w-full max-w-md mx-auto'>
            <form className='px-8 pt-6 pb-8 mb-4'>
              <div className='mb-4'>
                <label className='block text-pink-500 font-bold mb-2' for='name'>
                  Name
                </label>
                <input
                  className='appearance-none bg-gray-700 bg-opacity-50 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
                  id='name'
                  type='text'
                  placeholder='Enter your name'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-pink-500 font-bold mb-2' for='email'>
                  Email
                </label>
                <input
                  className='appearance-none bg-gray-700 bg-opacity-50 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
                  id='email'
                  type='email'
                  placeholder='Enter your email'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-pink-500 font-bold mb-2' for='comment'>
                  Comment
                </label>
                <textarea
                  className='appearance-none bg-gray-700 bg-opacity-50 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
                  id='comment'
                  rows='5'
                  placeholder='Enter your comment'
                ></textarea>
              </div>
              <div className='flex items-center justify-between'>
                <button
                  className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='button'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
