import React from 'react';
import { FaStar } from 'react-icons/fa';

const Service = ({ service }) => {
    const { _id, serviceTitle, image, rating, Price, details } = service
    return (
        <div>
            <div className="card shadow-xl border-2 rounded-xl text-white">
                <figure><img className='h-full w-full' src={image} alt="serivce" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceTitle}</h2>
                    <p className='text-lg flex items-center'>rating: {rating} <FaStar className='text-yellow-400 ml-2'></FaStar></p>
                    <p>Price: {Price}</p>
                    <p>
                        {
                            details.length <= 100 ? details : `${details.slice(0, 100)}...`
                        }
                    </p>
                    <div className="card-actions justify-start">
                        <button className="btn bg-[#ebb85e] border-0 text-lg text-black px-10 rounded-lg hover:text-[#ebb85e] hover:bg-white">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;