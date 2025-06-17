import React from "react";
import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section className='m-auto max-w-lg my-10 p-6'>
      <Link
        to='/jobs'
        className='block bg-black text-white text-center px-3 py-2 rounded hover:bg-blue-700 transition cursor-pointer'
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
