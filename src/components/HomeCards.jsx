import Card from "./Card";

const HomeCards = () => {
  return (
    <>
      <div className='flex justify-center gap-6'>
        <Card>
          <h1 className='text-2xl font-bold'>For Developers</h1>
          <p>Browse React developers jobs and start your career today</p>
          <a
            href=''
            className='bg-black text-white py-2 px-3 inline-block rounded-xl mt-3'
          >
            Browse Jobs
          </a>
        </Card>

        <Card bg='bg-blue-100'>
          <h1 className='text-2xl font-bold'>For Employeers</h1>
          <p>List your job to find the perfect developer for the role</p>
          <a
            href=''
            className='bg-blue-700 text-white py-2 px-3 inline-block rounded-xl mt-3'
          >
            Add Jobs
          </a>
        </Card>
      </div>
    </>
  );
};

export default HomeCards;
