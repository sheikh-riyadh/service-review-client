import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col bg-base-200">
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">Register now</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center">
                        <button className='text-black text-lg hover:bg-amber-300 px-3 py-2 rounded-lg'>Continue with<FaGoogle className='inline-block ml-2'></FaGoogle></button>
                        <div className="text-sm font-bold lg:mx-2">OR</div>
                        <button className='text-black text-lg hover:bg-amber-300 px-3 py-2 rounded-lg'>Continue with<FaGithub className='inline-block ml-2'></FaGithub></button>
                    </div>
                    <form className="card flex-shrink-0 lg:w-[560px] max-w-sm shadow-2xl  rounded-2xl">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <span>Already have an account? <Link to="/login" className="link link-hover">Login</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-amber-300 hover:bg-amber-300 border-0 text-black font-semibold">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;