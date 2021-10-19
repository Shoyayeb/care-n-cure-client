import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white dark:bg-gray-800 w-full py-8">
                <div className="max-w-screen-xl mx-auto px-4">
                    <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
                        <li className="my-2">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="my-2">
                            <Link to="/services">services</Link>
                        </li>
                        <li className="my-2">
                            <Link to="/findadoctor">Find a Doctor</Link>
                        </li>
                        <li className="my-2">
                            <Link className="text-red-500" to="/ambulance">Ambulance</Link>
                        </li>
                        <li className="my-2">
                            <Link to="/register">Register</Link>
                        </li>

                    </ul>
                    <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
                        <a href="https://facebook.com" className="text-blue-600 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaFacebook></FaFacebook>
                        </a>
                        <a href="https://twitter.com" className="text-blue-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaTwitter></FaTwitter>
                        </a>
                        <a href="https://github.com" className="text-green-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaGithub></FaGithub>
                        </a>
                        <a href="https://linkedin.com" className="text-blue-500 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaLinkedinIn></FaLinkedinIn>
                        </a>

                    </div>
                    <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
                        Created by Charlie
                    </div>
                </div>
            </footer >

        </div >
    );
};

export default Footer;