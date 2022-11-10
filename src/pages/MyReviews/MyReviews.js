import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import SingleReview from './SingleReview';
import NoFound from '../../assets/page-not-found.svg'
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    const [myReviews, setMyReviews] = useState()
    const { user } = useContext(AuthContext)
    useTitle('My reviews')
    useEffect(() => {
        fetch(`https://review-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
            .catch(error => console.error(error))
    }, [user?.email])

    const handleDeleteReview = (id) => {
        const agreeDelete = window.confirm('Do you want to delete this item?')
        if (agreeDelete) {
            fetch(`https://review-server.vercel.app/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaingReviews = myReviews.filter(review => review?._id !== id)
                        setMyReviews(remaingReviews)
                        toast('Delete succesfull.', { position: 'top-center', theme: 'dark' })
                    }
                })
                .catch(error => console.error(error))
        }

    }
    return (
        <div className='my-24 mx-5 lg:mx-24'>
            <div>
                {
                    myReviews?.length > 0 ?
                        <>
                            <h2 className='uppercase text-2xl text-center lg:text-4xl font-bold pb-5 lg:pb-10'>my reviews</h2>
                        </>
                        :
                        <div className='flex flex-col justify-center items-center'>
                            <h2 className='uppercase text-2xl text-center lg:text-4xl font-bold pb-5 lg:pb-10'>No reviews found</h2>
                            <img className='w-6/12' src={NoFound} alt="No found" />
                        </div>
                }
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    myReviews?.map(review => <SingleReview
                        key={review?._id}
                        review={review}
                        handleDeleteReview={handleDeleteReview}
                    ></SingleReview>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyReviews;