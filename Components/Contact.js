import React from 'react';
import Image from "next/image"
import contact from '../public/contact.png'
import { LightSpeed } from 'react-reveal';

const Contact = () => {
    return (
        <div id='contact'>
            <LightSpeed left>
                <h2 className='text-center text-5xl font-bold text-indigo-400 mb-5'>Get in Touch..</h2>
            </LightSpeed>

            <div className="hero mb-20">
                <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse">
                    <div className="text-center w-3/4 lg:text-left">
                        <Image className='w-full' src={contact} alt="contact" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">

                        <div className="card-body w-full mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <input type="text" placeholder="Your Message" className="input input-lg input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-indigo-400 border-0 hover:bg-indigo-300">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;