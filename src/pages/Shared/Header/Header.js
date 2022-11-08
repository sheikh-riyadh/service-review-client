import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Header = () => {
    const headerItems = () => {
        return <div className='flex flex-col lg:flex-row lg:bg-slate-100 py-3 font-semibold text-xl text-black'>
            <li className='ml-5 mt-5 lg:mt-0 lg:mr-5'>
                <Link className='hover:bg-[#ebb85e]' to='/'>Home</Link>
            </li>
            <li className='ml-5 mt-5 lg:mt-0 lg:mr-5'>
                <Link className='hover:bg-[#ebb85e]' to='/services'>Services</Link>
            </li>
            <li className='mt-5 lg:mt-0 lg:mr-5'>
                <button className='capitalize border-0 hover:bg-[#ebb85e] text-black'>
                    <Link to='/register'>Register</Link>
                </button>
            </li>
            <li className='mt-5 lg:mt-0 lg:mr-5'>
                <button className='capitalize border-0 hover:bg-[#ebb85e] text-black'>
                    <Link to='/login'>Login</Link>
                </button>
            </li>
            <li className='mt-5 lg:mt-0 lg:mr-5'>
                <div className='capitalize lg:bg-[#ebb85e]'>
                    <FaUserCircle className='text-xl'></FaUserCircle>
                </div>
            </li>
        </div>

    }
    return (
        <div>
            <div className="navbar bg-black flex justify-between p-0 border-b-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 shadow rounded-box bg-[#ebb85e] w-52">
                            <div>
                                {
                                    headerItems()
                                }

                            </div>
                        </ul>
                    </div>
                    <div className='hidden lg:block'>
                        <Link to='/'>
                            <img src={logo} alt='logo' className='w-4/12 ml-5' />
                        </Link>
                    </div>
                </div>
                <div className='block lg:hidden ml-52'>
                    <Link to='/'>
                        <img src={logo} alt='logo' className='w-6/12 lg:w-4/12 ml-5' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            headerItems()
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;