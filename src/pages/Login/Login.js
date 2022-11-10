import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()

const Login = () => {
    useTitle('Login')
    const { loginWithEmailPassword, loginWithProvider } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const handlerOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmailPassword(email, password)
            .then(() => {
                toast("Login succesfull", { position: "top-center", theme: "dark" })
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/user-not-found).") {
                    toast("User not found please register", { position: "top-center", theme: "dark" })
                    form.reset()
                } else if (error.message === "Firebase: Error (auth/wrong-password).") {
                    toast("Incorrect password please try again", { position: "top-center", theme: "dark" })
                    form.reset()
                }
                else {
                    console.error(error)
                }
            })
    }

    const handleLoginWithGoogle = () => {
        loginWithProvider(googleProvider)
            .then(() => {
                toast("Login succesfull", { position: "top-center", theme: "dark" })
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleLoginWithGitHub = () => {
        loginWithProvider(gitHubProvider)
            .then(() => {
                toast("Login succesfull", { position: "top-center", theme: "dark" })
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col bg-white rounded-xl text-black">
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">Login now</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center">
                        <button onClick={handleLoginWithGoogle} className='text-black text-lg hover:bg-[#ebb85e] px-3 py-2 rounded-lg'>Continue with<FaGoogle className='inline-block ml-2'></FaGoogle></button>
                        <div className="text-sm font-bold lg:mx-2">OR</div>
                        <button onClick={handleLoginWithGitHub} className='text-black text-lg hover:bg-[#ebb85e] px-3 py-2 rounded-lg'>Continue with<FaGithub className='inline-block ml-2'></FaGithub></button>
                    </div>
                    <form onSubmit={handlerOnSubmit} className="card flex-shrink-0 lg:w-[560px] max-w-sm">
                        <div className="card-body">
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;