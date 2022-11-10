import React from 'react';
import zuku from '../../../assets/juku.jpg'

const About = () => {
    return (
        <div className='flex flex-row justify-between'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={zuku} className="rounded-2xl shadow-2xl w-full lg:w-7/12 lg:h-8/12" alt='zuku' />
                    <div className='text-center lg:text-start'>
                        <h1 className="uppercase text-2xl lg:text-4xl font-bold">ABOUT ME</h1>
                        <p className="py-6 lg:pr-56">ZUKO combines the classic knowledge of traditional portraiture with an innovative and contemporary style.</p>
                        <div>
                            <div className='grid grid-cols-1 lg:grid-cols-2'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-4xl mb-2'>services
                                    </h1>
                                    <span>Food photography</span>
                                    <span>Product photography.</span>
                                    <span>Portrait Photography</span>
                                    <span>Set design</span>
                                    <span>Lighting Photography</span>
                                </div>
                                <div>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='text-4xl mb-2'>awards
                                        </h1>
                                        <span>The National Geographic Photo Contest</span>
                                        <span>Sony World Photography</span>
                                        <span>Monovisions Photograph</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;