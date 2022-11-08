import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()

const Register = () => {

    const { createUserWithEmailPassword, loginWithProvider } = useContext(AuthContext)

    const handlerOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUserWithEmailPassword(email, password)
            .then(() => {
                toast("Registration succesfull", { position: "top-center", theme: "dark" })
                form.reset()
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    toast("User already exisit", { position: "top-center", theme: "dark" })
                    form.reset()
                } else {
                    console.error(error)
                }
            })
    }

    const handleLoginWithGoogle = () => {
        loginWithProvider(googleProvider)
            .then((response) => {
                toast("Login succesfull", { position: "top-center", theme: "dark" })
            })
            .catch(error => console.error(error))
    }

    const handleLoginWithGitHub = () => {
        loginWithProvider(gitHubProvider)
            .then((response) => {
                toast("Login succesfull", { position: "top-center", theme: "dark" })
            })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col bg-white rounded-xl text-black">
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">Register now</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center">
                        <button onClick={handleLoginWithGoogle} className='text-black text-lg hover:bg-[#ebb85e] px-3 py-2 rounded-lg'>Continue with<FaGoogle className='inline-block ml-2'></FaGoogle></button>
                        <div className="text-sm font-bold lg:mx-2">OR</div>
                        <button onClick={handleLoginWithGitHub} className='text-black text-lg hover:bg-[#ebb85e] px-3 py-2 rounded-lg'>Continue with<FaGithub className='inline-block ml-2'></FaGithub></button>
                    </div>
                    <form onSubmit={handlerOnSubmit} className="card flex-shrink-0 lg:w-[430px]">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="name" className="input text-white input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input text-white input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input text-white input-bordered" />
                                <label className="label">
                                    <span>Already have an account? <Link to="/login" className="link link-hover">Login</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#ebb85e] font-semibold hover:bg-[#ebb85e] border-0 text-black text-xl">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;