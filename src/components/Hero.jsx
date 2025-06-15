import React from "react";

const Hero = ({ title, subtitle }) => {
  return (
    <>
      <section className='h-screen flex justify-center items-center flex-col bg-blue-500'>
        <h1 className='text-6xl font-bold leading-normal text-white uppercase'>
          {title}
        </h1>
        <p className=''>{subtitle}</p>
      </section>
    </>
  );
};

export default Hero;
