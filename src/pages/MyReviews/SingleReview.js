import React from 'react';
import { FaStar } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const SingleReview = ({ review, handleDeleteReview }) => {
    const { _id, reviewerMessage, reviewerName, reviewerImg, reviewerRating, serviceTitle } = review

    useTitle('Review')
    return (
        <div className='mt-10'>
            <div className="card h-full bg-white text-black shadow-xl relative rounded-md">
                <figure className="px-10 pt-10">
                    <img src={reviewerImg} alt="reviewerImage" className="rounded-full w-2/12 absolute -top-7 border-4 border-black" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{reviewerName}</h2>
                    <p className='font-bold'>{serviceTitle}</p>
                    <p>{reviewerMessage}</p>
                    <div className="card-actions flex items-center">
                        <p>Rating: {reviewerRating}</p>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                </div>
                <button onClick={() => handleDeleteReview(_id)} className="btn bg-[#ebb85e] font-semibold hover:bg-[#ebb85e] border-0 text-black text-xl">Delete</button>
            </div>
        </div>
    );
};

export default SingleReview;