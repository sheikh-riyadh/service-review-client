import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import AddServiceImg from '../../assets/add-service.svg'
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add service')
    const handleAddService = (e) => {
        e.preventDefault()
        const form = e.target;
        const serviceTitle = form.serviceTitle.value;
        const image = form.imgUrl.value
        const rating = form.rating.value;
        const Price = form.price.value;
        const details = form.message.value;

        const addedUserService = {
            serviceTitle,
            image,
            rating,
            Price,
            details
        }

        fetch('https://review-server.vercel.app/add-service/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedUserService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Add service succesfully', { position: 'top-center', theme: 'dark' })
                    form.reset()
                }
            })
            .catch(error => console.error(error))

    }
    return (
        <div className='my-12 mx-24 bg-[#ebb85e]'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <form onSubmit={handleAddService} className="card-body">
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Service title</span>
                                </label>
                                <input required type="text" name='serviceTitle' placeholder="title" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Service image url</span>
                                </label>
                                <input required type="url" name='imgUrl' placeholder="service image url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Price</span>
                                </label>
                                <input required type="number" name='price' placeholder="price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Add review</span>
                                </label>
                                <select name='rating' className='select select-bordered text-white' defaultValue={'5'} required >
                                    <option value="5" disabled>Select your rating</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Service description</span>
                            </label>
                            <textarea required name='message' className="textarea textarea-bordered text-white" placeholder="service description"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn border-0 text-black text-lg bg-white">Add service</button>
                        </div>
                    </form>
                </div>
                <div className='bg-white p-10 lg:p-24'>
                    <img className='w-full h-full' src={AddServiceImg} alt="add_service" />
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddService;