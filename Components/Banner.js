import React from 'react';
import Image from "next/image"
import carousel from '../public/Carousel/carousel1.png'
import carouse2 from '../public/Carousel/carousel2.png'
import carouse3 from '../public/Carousel/carousel3.png'
import carouse4 from '../public/Carousel/carousel4.png'

const Banner = () => {
    return (
        <div className="h-96 w-full carousel carousel-vertical">
            <div className="carousel-item h-full">
                <Image className='rounded-xl' src={carousel} alt='' />
                <div className='flex flex-col text-right font-bold hidden lg:block h-36 my-auto'>
                    <h3 className='text-3xl text-right text-indigo-400 '>{`Cox's Bazar`}</h3>
                    <small className='text-slate-500'>28th November, 2020</small>
                    <p className='text-lg text-slate-400'>Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</p>
                </div>
            </div>
            <div className="carousel-item h-full">
                <div className='flex flex-col text-left font-bold hidden lg:block h-36 my-auto'>
                    <h3 className='text-3xl text-indigo-400 '>Saint Martin</h3>
                    <small className='text-slate-500'>28th November, 2019</small>
                    <p className='text-lg text-slate-400'>Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</p>
                </div>
                <Image className='rounded-xl' src={carouse2} alt='' />
            </div>
            <div className="carousel-item h-full">
                <Image className='rounded-xl' src={carouse3} alt='' />
                <div className='flex flex-col text-right font-bold hidden lg:block h-36 my-auto'>
                    <h3 className='text-3xl text-right text-indigo-400 '>Tanguar Hawor</h3>
                    <small className='text-slate-500'>3rd January, 2022</small>
                    <p className='text-lg text-slate-400'>Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</p>
                </div>
            </div>
            <div className="carousel-item h-full">
                <div className='flex flex-col text-left font-bold hidden lg:block h-36 my-auto'>
                    <h3 className='text-3xl text-indigo-400 '>Sajek</h3>
                    <small className='text-slate-500'>11th September, 2021</small>
                    <p className='text-lg text-slate-400'>Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</p>
                </div>
                <Image className='rounded-xl' src={carouse4} alt='' />
            </div>
        </div>
    );
};

export default Banner;