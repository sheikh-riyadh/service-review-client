import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import SingleReview from './SingleReview';

const MyReviews = () => {
    const [myReviews, setMyReviews] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://review-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
            .catch(error => console.error(error))
    }, [user?.email])

    const handleDeleteReview = (id) => {

    }
    return (
        <div className='my-24 mx-5 lg:mx-24'>
            <h2 className='uppercase text-2xl text-center lg:text-4xl font-bold pb-5 lg:pb-10'>my reviews</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    myReviews?.map(review => <SingleReview
                        key={review?._id}
                        review={review}
                        handleDeleteReview={handleDeleteReview}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default MyReviews;