import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Doctors = () => {
    return (
        <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
            <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
                Hospital Management team
            </p>
            <p className="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">
                Meat the best team in wolrd
            </p>



            <div className="flex items-center flex-col md:flex-row justify-center">
                <div className="p-4">
                    <div className="text-center mb-4 opacity-90">
                        <a href="/" className="block relative">
                            <img alt="profil" src="/menDoctor.jpg" className="mx-auto object-cover rounded-full h-40 w-40 " />
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl text-gray-800 dark:text-white">
                            Patrick Sebastien
                        </p>
                        <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                            Lead Doctor
                        </p>
                        <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                            Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is a great doctor and leader.
                        </p>
                    </div>
                    <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
                        <a href="https://facebook.com" className="text-blue-600 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaFacebook className="text-xl"></FaFacebook>
                        </a>
                        <a href="https://twitter.com" className="text-blue-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaTwitter className="text-xl"></FaTwitter>
                        </a>
                        <a href="https://github.com" className="text-green-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaGithub className="text-xl"></FaGithub>
                        </a>
                        <a href="https://linkedin.com" className="text-blue-500 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaLinkedinIn className="text-xl"></FaLinkedinIn>
                        </a>
                    </div>
                </div>



                <div className="p-4">
                    <div className="text-center mb-4 opacity-90">
                        <a href="/" className="block relative">
                            <img alt="profil" src="/founder.jpg" className="mx-auto object-cover rounded-full h-40 w-40 " />
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl text-gray-800 dark:text-white">
                            Jean Castux
                        </p>
                        <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                            Founder
                        </p>
                        <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                            Jean Castux is an imitator, humorist, Social worker, born November 14, 1953 in Pontivy.
                        </p>
                    </div>
                    <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
                        <a href="https://facebook.com" className="text-blue-600 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaFacebook className="text-xl"></FaFacebook>
                        </a>
                        <a href="https://twitter.com" className="text-blue-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaTwitter className="text-xl"></FaTwitter>
                        </a>
                        <a href="https://github.com" className="text-green-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaGithub className="text-xl"></FaGithub>
                        </a>
                        <a href="https://linkedin.com" className="text-blue-500 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaLinkedinIn className="text-xl"></FaLinkedinIn>
                        </a>
                    </div>
                </div>



                <div className="p-4">
                    <div className="text-center mb-4 opacity-90">
                        <a href="/" className="block relative">
                            <img alt="profil" src="/cto.jpg" className="mx-auto object-cover rounded-full h-40 w-40 " />
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl text-gray-800 dark:text-white">
                            Thierry Halliday
                        </p>
                        <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                            CTO
                        </p>
                        <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                            Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is management specialist.
                        </p>
                    </div>
                    <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
                        <a href="https://facebook.com" className="text-blue-600 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaFacebook className="text-xl"></FaFacebook>
                        </a>
                        <a href="https://twitter.com" className="text-blue-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaTwitter className="text-xl"></FaTwitter>
                        </a>
                        <a href="https://github.com" className="text-green-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaGithub className="text-xl"></FaGithub>
                        </a>
                        <a href="https://linkedin.com" className="text-blue-500 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <FaLinkedinIn className="text-xl"></FaLinkedinIn>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;