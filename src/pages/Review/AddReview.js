import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const AddReview = () => {

    const { _id } = useLoaderData()
    const handlerOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const reviewerName = form.name.value;
        const reviewerEmail = form.email.value;
        const reviewerMessage = form.message.value;
        const reviewerRating = form.rating.value;
        console.log(reviewerName, reviewerEmail, reviewerMessage, reviewerRating)

    }
    return (
        <div className=' mt-8 lg:mt-20'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col bg-white rounded-xl text-black">
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">Add your review</h1>
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
                                    <span className="label-text text-black">Ratings</span>
                                </label>
                                <select className='select select-bordered text-white' defaultValue={'DEFAULT'} >
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

export default AddReview;