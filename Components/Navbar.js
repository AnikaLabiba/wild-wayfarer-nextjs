import React from 'react';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    // menu items
    const menuItem = <>
        <li className='mx-8 text-indigo-400 font-bold '>Services</li>
        <li className='mx-8 text-indigo-400 font-bold'>Blog</li>
        <li className='mx-8 text-indigo-400 font-bold'>Contact</li>
    </>

    return (

        <div className={`navbar bg-base-100 lg:px-16 ${styles.navbarMain}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* menu items object */}
                        {menuItem}
                    </ul>
                </div>
                <a className={`btn btn-ghost normal-case text-xl text-indigo-400 font-bold ${styles.title}`}>Wild Wayfarer</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {/* menu items object */}
                    {menuItem}
                </ul>
            </div>

        </div>

    );
};

export default Navbar;