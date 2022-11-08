import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://codersheikh.com/review/wp-content/uploads/2022/11/banner-1-scaled.jpg")` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:max-w-5xl">
                        <h1 className="mb-5 text-4xl lg:text-6xl font-bold">PERFECT MOOD
                            IS ALWAYS HERE</h1>
                        <p className="mb-5 text-xl lg:max-w-2xl mx-auto">Many years ago, when I watched the sun go down to the beach at
                            the end of the garden of my house, I received a phone call from a
                            famous critic. I did not pick up the phone and just started taking pictures of a beautiful sunset</p>

                        <button className='bg-[#ebb85e] rounded-md text-xl font-bold text-black hover:bg-black hover:text-white py-4 px-6 transition-all'>Let's get started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;