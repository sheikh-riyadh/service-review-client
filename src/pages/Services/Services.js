import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Service from '../Service/Service';

const Services = () => {
    const services = useLoaderData()
    useTitle('Services')
    return (
        <div className='my-12 lg:mt-24 px-5 lg:px-10'>
            <h1 className='uppercase text-2xl text-center lg:text-4xl font-bold pb-5 lg:pb-10 my-5'>All Services</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service?._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;