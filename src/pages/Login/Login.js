import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col bg-white rounded-xl text-black">
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">Login now</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center">
                        <button className='text-black text-lg hover:bg-amber-300 px-3 py-2 rounded-lg'>Continue with<FaGoogle className='inline-block ml-2'></FaGoogle></button>
                        <div className="text-sm font-bold lg:mx-2">OR</div>
                        <button className='text-black text-lg hover:bg-amber-300 px-3 py-2 rounded-lg'>Continue with<FaGithub className='inline-block ml-2'></FaGithub></button>
                    </div>
                    <form className="card flex-shrink-0 lg:w-[560px] max-w-sm">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <span>New here? <Link to="/register" className="link link-hover">Register</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#ebb85e] font-semibold hover:bg-[#ebb85e] border-0 text-black text-xl">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;