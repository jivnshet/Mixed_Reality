import React from 'react';

const Explore = () => {
  return <section className='min-h-[800px] mb-16 lg:mb-4'>
    <div className="container mx-auto h-full">
      <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center'>
        <h3 className='text-3xl font-semibold mb-8' data-aos="fade-right">
          Explore products in a new way
        </h3>
        {/* <h3 className='text-3xl font-semibold mb-8' data-aos="fade-right" data-aos-offset="1000">
          Explore products in a new way
        </h3> */}
        <p className='max-w-xs mb-12' data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt rem facilis.</p>
        {/* <p className='max-w-xs mb-12' data-aos="fade-right" data-aos-offset="1100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt rem facilis.</p> */}
        <form className='flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0' data-aos="fade-up" data-aos-offset="300">
          <input className='bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md' type="text" placeholder='Enter your email address' />
          <button className='btn'>Start</button>
        </form>
      </div>
    </div>
  </section>;
};

export default Explore;
