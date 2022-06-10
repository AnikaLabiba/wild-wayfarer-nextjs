import React from 'react';
import Image from "next/image"
import pic1 from '../public/photo.png'
import pic2 from '../public/Pic1.jpg'
import pic3 from '../public/hotel.png'
import styles from '../styles/Services.module.css'

const Services = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-4xl font-bold text-center'>My Services</h2>
            <div className='grid lg:grid-cols-2 gap-28 lg:px-36 my-16'>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <Image src={pic1} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Photoshoot</h2>
                        <p>$100</p>
                        <p>Hire me and you will get a guide to the way of your travel and a professional photographer.</p>
                        <div className="card-actions justify-end">
                            <button className={`btn bg-indigo-400 ${styles.bookBtn}`}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <Image src={pic3} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Hotel & resort booking</h2>
                        <p>$100</p>
                        <p>I will help you to find the best and safe accommodation in your dream destination.</p>
                        <div className="card-actions justify-end">
                            <button className={`btn bg-indigo-400 ${styles.bookBtn}`}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <Image src={pic2} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Info & tips about the destination.</h2>
                        <p>$150</p>
                        <p>I will provide you all the information about the travel destination.</p>
                        <div className="card-actions justify-end">
                            <button className={`btn bg-indigo-400 ${styles.bookBtn}`}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <Image src={pic2} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Info & tips about the passport and visa.</h2>
                        <p>$150</p>
                        <p>I will help you in your immigration if you are the traveller from abroad.</p>
                        <div className="card-actions justify-end">
                            <button className={`btn bg-indigo-400 ${styles.bookBtn}`}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;