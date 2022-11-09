import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ review }) => {

    const { reviewerName, reviewerImg, reviewerMessage, reviewerRating } = review
    return (
        <div className='mt-10'>
            <div className="card h-full bg-white text-black shadow-xl relative rounded-md">
                <figure className="px-10 pt-10">
                    <img src={reviewerImg} alt="reviewerImage" className="rounded-full w-2/12 absolute -top-7" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{reviewerName}</h2>
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

export default Review;