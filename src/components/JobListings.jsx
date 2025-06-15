import jobs from "../jobs.json";
import JobListing from "./JobListing";

const JobListings = () => {
  const recentJobs = jobs.slice(0, 3);
  return (
    <>
      <section className='bg-blue-50 py-20'>
        <h1 className='text-center font-bold text-4xl mb-5'>Browse Jobs</h1>
        <div className='grid grid-cols-1 md:grid-cols-3  gap-6'>
          {recentJobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </section>
    </>
  );
};

export default JobListings;
