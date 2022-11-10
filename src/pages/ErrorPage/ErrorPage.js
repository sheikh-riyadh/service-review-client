import React from 'react';
import ErrorMessage from '../../assets/error-page.svg'

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <img className='w-6/12' src={ErrorMessage} alt="404_page" />
            <h2 className='uppercase text-2xl text-center lg:text-4xl font-bold pb-5 lg:pb-10'>Page not found</h2>
        </div>
    );
};

export default ErrorPage;