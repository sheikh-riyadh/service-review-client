import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/logo.png'

const Footer = () => {
    return (
        <div className='lg:mt-24'>
            <footer className="footer p-10 border-t-4 text-base-content">
                <div>
                    <img className='w-5/12' src={logo} alt="logo" />
                    <div className="grid grid-flow-col gap-4 mt-5">
                        <FaFacebook className='bg-[#ebb85e] text-black p-2 text-4xl rounded'></FaFacebook>
                        <FaTwitter className='bg-[#ebb85e] text-black p-2 text-4xl rounded'></FaTwitter>
                        <FaInstagram className='bg-[#ebb85e] text-black p-2 text-4xl rounded'></FaInstagram>
                        <FaLinkedin className='bg-[#ebb85e] text-black p-2 text-4xl rounded'></FaLinkedin>
                    </div>
                    <p>Copyright@2022 sheikhriyadh | All Reserverd</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='/' className="link link-hover">Food photography</a>
                    <a href='/' className="link link-hover">Products Photography</a>
                    <a href='/' className="link link-hover">Portrait Photography</a>
                    <a href='/' className="link link-hover">Set design</a>
                    <a href='/' className="link link-hover">Lighting</a>
                    <a href='/' className="link link-hover">Documentary-style photography.</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/' className="link link-hover">About us</a>
                    <a href='/' className="link link-hover">Contact</a>
                    <a href='/' className="link link-hover">Jobs</a>
                    <a href='/' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/' className="link link-hover">Terms of use</a>
                    <a href='/' className="link link-hover">Privacy policy</a>
                    <a href='/' className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;