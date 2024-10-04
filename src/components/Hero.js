import React from 'react';
import Button from './supportComponents/Button';
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import CompanyOverview from './CompanyOverview';

const Hero = () => {
  return (
    <section className='text-center text-wrap'>
      <h1 className='text-3xl font-bold md:text-5xl py-10 text-primary'>
        Beautiful analytics to grow smarter
      </h1>
      <p className='text-lg text-gray-500 pb-5 max-w-xl mx-auto'>
        Powerful, self-serve product and growth analytics to help you convert, engage, 
        and retain more users. Trusted by over 4,000 startups.
      </p>

      <div className='flex flex-col my-24 sm:flex-row justify-center items-center align-middle gap-5 mt-4'>
        <Button 
          content='Demo' 
          icon={<MdOutlinePlayCircleOutline />} 
          className="w-full sm:w-auto hover:bg-gray-200 transition duration-150"
        />
        <Button  
          className="w-full sm:w-auto bg-violet-700 text-white hover:bg-violet-600 transition duration-150" 
          content={"Sign up"} 
        />
      </div>

      <div className='relative rounded-2xl w-full h-64 sm:h-1/2 overflow-hidden'>
        <img 
          className='w-full h-full  border-8 rounded-2xl border-primary' 
          src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l5SBg5-2xTpSBE-rJCr9ZYRucEK50JvJ55-tAKzZbxX9SnO-b57UJj6KDmzaZisKA4N~4BMUlupTLJqEftQ6BKeIznFmli3DsNyqR2aqQuOzwDrF1rmegRC0M0r9o2USygOsN49gx~1z~5F~ikKoRtv30aEFsv-WCugFebGpdehUeeg5jNRgJxfv6Cu~SZNb68F8FDHyhRWMh8F7DmQ2qIMTdGP8yMSLZdXRcRkGdfuAeQQPx-ayswOcMkz22wq2pmzBY5JbnWU6MP4o9XPJ-WKc5hRPv2RzYUwuHBAcWrt3WPbFpa3d7R1BsUG~7psqZd1iTit-MWHR8pHQjr6ARQ__" 
          alt="Analytics visualization" 
        />
      <CompanyOverview />
      </div>
<hr className='my-20'/>
    </section>
  );
}

export default Hero;
