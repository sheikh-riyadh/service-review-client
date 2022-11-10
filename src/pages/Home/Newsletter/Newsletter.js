import React from 'react';

const Newsletter = () => {
    return (
        <div className='flex flex-col items-center'>
            <div>
                <h2 className='uppercase text-2xl text-center lg:text-4xl font-bold pb-5'>Subscribe my newsletter!!</h2>
                <div className='flex'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full mb-5 lg:mb-0" />
                    <button className="btn btn-active">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;