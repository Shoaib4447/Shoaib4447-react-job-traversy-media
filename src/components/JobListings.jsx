import jobs from "../jobs.json";
import JobListing from "./JobListing";

const JobListings = ({ isHome = false }) => {
  const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <>
      <section className='bg-blue-50 py-20'>
        <h1 className='text-center font-bold text-4xl mb-5'>
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3  gap-6'>
          {jobListings.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </section>
    </>
  );
};

export default JobListings;
