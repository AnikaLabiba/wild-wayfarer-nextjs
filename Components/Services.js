import React from 'react';
import Image from "next/image"
import photography from '../public/photography.png'
import hotel from '../public/hotel.png'
import destination from '../public/destination.png'
import visaTips from '../public/visa tips.jpg'
import styles from '../styles/Services.module.css'
import { LightSpeed } from 'react-reveal';

const Services = () => {
    return (
        <div id='services'>
            <div className='mt-20'>
                <LightSpeed left>
                    <h2 className='text-4xl font-bold text-center text-indigo-400'>My Services</h2>
                </LightSpeed>

                <div className='grid lg:grid-cols-2 gap-28 lg:px-36 my-16 text-slate-500 font-bold'>
                    <div className={`${styles.card} card bg-base-100 shadow-xl`}>
                        <figure>
                            <Image className={styles.serviceImg} src={photography} alt="Shoes" />
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
                    <div className={`${styles.card} card bg-base-100 shadow-xl`}>
                        <figure>
                            <Image src={hotel} alt="Shoes" />
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
                    <div className={`${styles.card} card bg-base-100 shadow-xl`}>
                        <figure>
                            <Image src={destination} alt="Shoes" />
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
                    <div className={`${styles.card} card bg-base-100 shadow-xl`}>
                        <figure>
                            <Image src={visaTips} alt="Shoes" />
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
        </div >
    );
};

export default Services;