import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Service/Service';
const Home = () => {


    const [limitServices, setLimitServices] = useState()
    useEffect(() => {
        fetch('https://review-server.vercel.app/limit-services')
            .then(res => res.json())
            .then(data => setLimitServices(data))
    }, [])


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://codersheikh.com/review/wp-content/uploads/2022/11/banner-1-scaled.jpg")` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:max-w-5xl">
                        <h1 className="mb-5 text-3xl lg:text-6xl font-bold">PERFECT MOOD
                            IS ALWAYS HERE</h1>
                        <p className="mb-5 text-xl lg:max-w-4xl mx-auto">Many years ago, when I watched the sun go down to the beach at
                            the end of the garden of my house, I received a phone call from a
                            famous critic. I did not pick up the phone and just started taking pictures of a beautiful sunset</p>

                        <button className='bg-[#ebb85e] rounded-md text-xl font-semibold text-black hover:bg-black hover:text-white py-4 px-6 transition-all'>Let's get started</button>
                    </div>
                </div>
            </div>
            <div className='mt-12 lg:mt-24 px-5 lg:px-10'>
                <h2 className='uppercase text-2xl text-center lg:text-4xl font-bold pb-5 lg:pb-10'>my services</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        limitServices?.map(service => <Service
                            key={service?._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
            <div className='flex justify-center my-10'>
                <Link to='/services'>
                    <button className='btn uppercase px-16 hover:text-[#ebb85e] hover:bg-white bg-[#ebb85e] rounded-xl text-xl font-semibold text-black'>See all</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;