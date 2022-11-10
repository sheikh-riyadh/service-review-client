import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { image, blogTitle, summary, _id } = blog
    return (
        <div className=' mx-5 lg:mx-24'>
            <div className="card lg:card-side bg-gray-900 p-5 shadow-xl rounded-md">
                <figure><img src={image} alt="BlogImage" /></figure>
                <div className="card-body lg:w-8/12">
                    <h2 className="card-title">{blogTitle}</h2>
                    {
                        summary.length < 100 ? <p>{summary}</p> : <p>{summary.slice(0, 100)}...</p>
                    }
                    <div className="card-actions justify-center lg:justify-end">
                        <Link to={`/details/${_id}`}>
                            <button className="btn bg-[#ebb85e] rounded-md text-black mt-5 hover:bg-white">Show details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;