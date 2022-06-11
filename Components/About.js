import React from 'react';
import Image from "next/image"
import about from '../public/about.png'
import styles from '../styles/About.module.css'
import { Fade } from 'react-reveal';

const About = () => {
    return (
        <div id='about'>
            <div className="hero my-20 p-10">
                <div className="hero-content flex-col items-center lg:flex-row-reverse md:flex-row-reverse bg-indigo-100 ">
                    <div className={`flex-1 mt-[-170px] ${styles.aboutImg}`}>
                        <Image src={about} className="w-full h-auto rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className={`flex-1 pl-16 ${styles.about}`}>
                        <Fade left>
                            <h1 className="text-5xl font-bold text-indigo-400">Why Me!</h1>
                        </Fade>
                        <p className="py-6 text-slate-400 font-bold">If you are looking for a single guide to have with you while traveling to Bangladesh, then you are at the right place. I have years of experience in Traveling and Tourists Guide. I can be your personal photographer, your historical guide, museum guide, nature and city guide. Please take a look to the packages where I have added the services that I can provide you.</p>
                        <p className="text-slate-400 font-bold">Make your <span className='text-indigo-400'>Journey Wonderfull</span> with <a href='#services' className="btn btn-sm hover:bg-indigo-300 bg-indigo-400 border-0 px-8">Me</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;