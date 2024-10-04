import React from 'react';

const companies = [
  { id: 1, name: 'Boltshit', logo: '/asset/Logomark.jpg' },
  { id: 2, name: 'Lightbox', logo: '/asset/Logomark (1).jpg' },
  { id: 3, name: 'featherDev', logo: '/asset/Logomark (2).jpg' },
  { id: 4, name: 'Spherule', logo: '/asset/Logomark (3).jpg' },
  { id: 5, name: 'GlobalBank', logo: '/asset/Logomark (4).jpg' },
  { id: 6, name: 'Nietzsche', logo: '/asset/Logomark (5).jpg' },
];

const CompanyOverview = () => {
  return (
    <>
    <div className='absolute z-10 bottom-0 bg-white mt-10 py-24  h-1/3 p-12 text-center flex flex-col items-center w-full'>

      <h1 className='text-xl  text-gray-500 mb-4 py-6'>Join 4,000+ companies already growing</h1>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-2'>
        {companies.map((company) => (
          <div key={company.id} className='flex justify-center py-2 items-center hover:bg-gray-100 transition duration-200 p-4 rounded col-span-1 lg:col-span-1'>
            <img 
              src={company.logo} 
              alt={`${company.name} logo`} 
              className='w-12 h-12 mb-2 mx-2' 
            />
            <h1 className='text-lg font-semibold'>{company.name}</h1>
          </div>
        ))}
      </div>
    </div>

    </>
  );
}

export default CompanyOverview;
