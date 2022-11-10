import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddReview = () => {


    const { user } = useContext(AuthContext)
    const { _id, serviceTitle } = useLoaderData()

    useTitle('Add review')
    const handlerOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const reviewerName = form.name.value;
        const reviewerEmail = form.email.value;
        const reviewerRating = form.rating.value;
        const reviewerMessage = form.message.value;
        const review = {
            reviewId: _id,
            reviewerMessage,
            reviewerName,
            reviewerImg: user.photoURL,
            reviewerRating,
            reviewerEmail,
            serviceTitle
        }

        fetch('https://review-server.vercel.app/reviews/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Thanks for you feedback", { position: 'top-center', theme: "dark" })
                    form.reset()
                }
            }).catch(error => console.error(error))

    }
    return (
        <div className='lg:mt-20'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col bg-white rounded-xl text-black">

                    <form onSubmit={handlerOnSubmit} className="card flex-shrink-0 lg:w-[430px]">
                        <div className="card-body">
                            <div className="card-actions flex items-center justify-center text-yellow-600 text-4xl">
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Name</span>
                                </label>
                                <input defaultValue={user?.displayName} type="name" name='name' placeholder="name" className="input text-white input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input readOnly defaultValue={user?.email} type="email" name='email' placeholder="email" className="input text-white input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Ratings</span>
                                </label>
                                <select name='rating' className='select select-bordered text-white' defaultValue={'DEFAULT'} >
                                    <option value="DEFAULT" disabled>Select your rating</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Message</span>
                                </label>
                                <textarea name='message' className="textarea textarea-bordered text-white" placeholder="message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#ebb85e] font-semibold hover:bg-[#ebb85e] border-0 text-black text-xl">Add review</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddReview;