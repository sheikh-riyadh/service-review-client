import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowDetails = () => {
    const { serviceTitle, Price, image, details, rating } = useLoaderData()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:mx-52 mt-20 rounded-md'>

            <div>
                <img className='w-full' src={image} alt="serviceImage" />
            </div>
            <div className='p-5 text-black lg:h-[360px] lg:overflow-y-scroll  bg-[#ebb85e] '>
                <h1 className='text-2xl lg:text-4xl'>{serviceTitle}</h1>
                <p className='font-semibold text-xl'>Price: {Price}</p>
                <p className='font-semibold text-xl'>Rating: {rating}</p>
                <p className='text-justify'>{details}</p>
            </div>
        </div>
    );
};

export default ShowDetails;