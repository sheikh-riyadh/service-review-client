import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Review from '../Review/Review';

const ShowDetails = () => {

    useTitle('Show details')
    const [reviews, setReviews] = useState()
    const { serviceTitle, Price, image, details, rating, _id } = useLoaderData()

    useEffect(() => {
        fetch(`https://review-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:mx-52 mt-20 rounded-md'>
                <div>
                    <img className='w-full h-full' src={image} alt="serviceImage" />
                </div>
                <div className='p-5 text-black lg:h-[360px] lg:overflow-y-scroll  bg-[#ebb85e] '>
                    <h1 className='text-2xl lg:text-4xl'>{serviceTitle}</h1>
                    <p className='font-semibold text-xl'>Price: {Price}</p>
                    <p className='font-semibold text-xl'>Rating: {rating}</p>
                    <p className='text-justify'>{details}</p>
                </div>
            </div>
            <div className='my-24 mx-5 lg:mx-24'>
                <div>
                    {
                        reviews?.length > 0 ?

                            <>
                                <h2 className='uppercase text-2xl text-center lg:text-4xl font-bold pb-5 lg:pb-10'>Clients review</h2>
                                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                                    {
                                        reviews?.map(review => <Review
                                            key={review?._id}
                                            review={review}
                                        >
                                        </Review>)
                                    }
                                </div>
                            </>
                            :
                            <>
                                <h2 className='uppercase text-2xl text-center lg:text-4xl font-bold pb-5 lg:pb-10'>Can not get review yet..</h2>
                            </>
                    }
                </div>
                <div className='flex justify-center mt-5 lg:mt-10 '>
                    <Link to={`/add-review/${_id}`} className='btn px-10 hover:bg-white rounded-md text-black bg-[#ebb85e] capitalize'>Add review</Link>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;