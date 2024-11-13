import React from 'react';
import FavBookimg from '../assets/favoritebook.jpg';
import { Link } from 'react-router-dom';

function About() {
  return (
   <div>
    <h1 className="text-6xl font-bold text-center mt-20 my-8">About Us</h1>
    <div className='px-4 lg:px-24 my-18 flex flex-col md:flex-row justify-between items-center ' >
      <div className='md:w-1/2'>
        <img src={FavBookimg} alt='' className='rounded md:w-10/12'></img>
      </div>
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className='text-blue-700 '> Book Here!</span></h2>
        <div>
          <p>Welcome to our book store app!</p>
          <p>We are dedicated to providing a wide range of books for all readers, from classic literature to contemporary bestsellers. Our goal is to make it easy and convenient for book lovers to discover new titles, explore different genres, and find their next favorite read.</p>
          <p>Thank you for choosing our book store. Happy reading!</p>
        </div>
        {/* stats */}
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h3 className='text-3xl font-bold'>800+</h3>
            <p className='text-base'>Book Listing</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>550+</h3>
            <p className='text-base'>Register Users</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>1200+</h3>
            <p className='text-base'>PDF Downloads</p>
          </div>
        </div>
        <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition:all duration 300'>Explore More</button></Link>
      </div>
    </div>
  </div>
  );
}

export default About;
