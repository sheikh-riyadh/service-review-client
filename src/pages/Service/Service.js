import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {
    const { _id, serviceTitle, image, rating, Price, details } = service
    return (
        <PhotoProvider>
            <div>
                <div className="card glass shadow-xl rounded-xl text-white">
                    <figure>
                        <PhotoView key={_id} src={image}>
                            <img className='h-full w-full' src={image} alt="serivce" />
                        </PhotoView>
                    </figure>
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
                            <Link to={`/service-details/${_id}`}>
                                <button className="btn bg-[#ebb85e] border-0 text-lg text-black px-10 rounded hover:text-[#ebb85e] hover:bg-white">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default Service;