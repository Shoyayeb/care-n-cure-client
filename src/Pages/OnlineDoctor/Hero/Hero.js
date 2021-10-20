import React from 'react';

const Hero = () => {
    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden relative">
            <div className="text-start lg:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">
                        Free Online Doctor Chat 24/7
                        Online Doctor Consultation
                    </span>
                    <span className="block text-indigo-500">
                        Connect with a board-certified physician anytime you need.
                    </span>
                </h2>
                <p className="text-xl mt-4 text-gray-400">
                    For the first 3 days, our service is FREE. Join our 150,000+ members today.Our experienced physicians have been providing quality medical advice to those in need since 2014
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Get started
                        </button>
                    </div>
                </div>
            </div>
            <img src="/onlinedoctor.jpg" alt="onlinedoctor" className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0" />
        </div>



    );
};

export default Hero;