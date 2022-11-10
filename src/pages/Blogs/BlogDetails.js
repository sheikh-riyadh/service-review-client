import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const { image, blogTitle, summary } = useLoaderData()
    return (
        <div className='w-10/12 mx-auto text-center my-12'>
            <div className='flex justify-center'>
                <img className='w-full' src={image} alt="blogImage" />
            </div>
            <h1 className='text-xl lg:text-4xl'>{blogTitle}</h1>
            <p className='text-justify'>{summary}</p>
            <Link to='/blogs' className='btn mt-7'> Back to blog</Link>
        </div>
    );
};

export default BlogDetails;