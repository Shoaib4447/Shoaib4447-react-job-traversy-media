import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className='m-5 shadow-md p-4 bg-white rounded-md flex flex-col justify-between'>
      <div className=''>
        <p className='text-xs'>{job.type}</p>
        <h3 className='text-lg font-bold'>{job.title}</h3>
      </div>
      <div>
        <p className='leading-tight mb-3'>{description}</p>
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className='text-indigo-500 hover:text-indigo-600 mb-5'
        >
          {showFullDescription ? "less" : "more"}
        </button>
        <p className='text-blue-500'>{job.salary} /Year</p>
      </div>
      <div className='flex justify-between items-center border-t-1 border-gray-200'>
        <div className='text-orange-700 mb-3'>
          <FaMapMarker className='inline text-lg mb-1 mr-1' />
          {job.location}
        </div>
        <div>
          <Link
            to='#'
            className='bg-blue-500  py-2 px-3 font-bold text-white rounded mt-4 inline-block text-center'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
