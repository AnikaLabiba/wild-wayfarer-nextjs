import React from 'react';
import Image from "next/image"
import review1 from '../public/reviews/review1.jpg'
import review2 from '../public/reviews/review2.jpg'
import review3 from '../public/reviews/review3.jpg'
import { FaStar } from 'react-icons/fa';
import { LightSpeed } from 'react-reveal';

const Reviews = () => {
    return (
        <div className='mb-20'>
            <LightSpeed left>
                <h2 className='text-center text-4xl font-bold text-indigo-400 mb-5'>What Other Client Said</h2>
            </LightSpeed>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-9'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center">
                            <div className='w-20'>
                                <Image src={review1} className="w-full h-auto rounded-full" alt='' />
                            </div>
                            <h4 className='ml-4 text-xl font-bold text-indigo-400'>Emily</h4>
                        </div>
                        <p className='text-slate-400 font-bold'>She is just fabulas. I enjoyed the trip to Saint Martin the most. She really care for her clients</p>
                        <p className='flex text-yellow-500'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </p>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center">
                            <div className='w-20'>
                                <Image src={review3} className="w-full h-auto rounded-full" alt='' />
                            </div>
                            <h4 className='ml-4 text-xl font-bold text-indigo-400'>Jessica</h4>
                        </div>
                        <p className='text-slate-400 font-bold'>She is just fabulas. I enjoyed the trip to Saint Martin the most. She really care for her clients</p>
                        <p className='flex text-yellow-500'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </p>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center">
                            <div className='w-20'>
                                <Image src={review2} className="w-full h-auto rounded-full" alt='' />
                            </div>
                            <h4 className='ml-4 text-xl font-bold text-indigo-400'>Harry</h4>
                        </div>
                        <p className='text-slate-400 font-bold'>She is just fabulas. I enjoyed the trip to Saint Martin the most. She really care for her clients</p>
                        <p className='flex text-yellow-500'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
