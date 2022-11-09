import React from 'react';
import { FaStar } from 'react-icons/fa';

const SingleReview = ({ review, handleDeleteReview }) => {
    const { _id, reviewerMessage, reviewerName, reviewerImg, reviewerRating, serviceTitle } = review
    return (
        <div className='mt-10'>
            <div className="card h-full bg-white text-black shadow-xl relative rounded-md">
                <figure className="px-10 pt-10">
                    <img src={reviewerImg} alt="reviewerImage" className="rounded-full w-2/12 absolute -top-7 border-4 border-black" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{reviewerName}</h2>
                    <p>{serviceTitle}</p>
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
            </div>
        </div>
    );
};

export default SingleReview;