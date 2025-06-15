const Card = ({ children, bg = "bg-gray-100" }) => {
  return (
    <>
      <section className='m-4 py-20'>
        <div className={`${bg} p-6 rounded-lg shadow-md `}>{children}</div>
      </section>
    </>
  );
};

export default Card;
