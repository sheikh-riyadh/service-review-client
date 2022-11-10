import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog';

const Blogs = () => {
    const blogs = useLoaderData()
    return (
        <div className=' my-5 lg:my-12'>
            <h1 className='uppercase text-2xl text-center lg:text-4xl font-bold py-5 lg:pb-10'>blogs</h1>
            <div className='grid grid-cols-1 gap-5 lg:gap-10'>
                {
                    blogs.map(blog => <Blog
                        key={blog?._id}
                        blog={blog}
                    >
                    </Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;