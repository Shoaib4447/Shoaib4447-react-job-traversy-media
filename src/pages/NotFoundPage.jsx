import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center h-96'>
      <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
      <h1 className='text-6xl font-bold mb-4'>404 Page Not Found</h1>
      <p className='text-xl mb-5'>This page does't exit</p>
      <Link
        to='/'
        className='bg-indigo-700 hover:bg-indigo-900 text-white py-2 px-3 rounded mt-4'
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
