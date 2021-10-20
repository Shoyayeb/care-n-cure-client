import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="bg-white dark:bg-gray-800 ">
                <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span className="block">
                            Need an ambulance ?
                        </span>
                        <span className="block text-red-500">
                            Call Now.
                        </span>
                    </h2>
                    <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
                        offering 24 hours of medical transport facilities. Our ambulance services in the whole country at an affordable cost with very affection and car. We as a team is experienced in providing emergency treatments with the shortest span of time.
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                            <a href="tel:+8801212345678" className="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                +8801212345678
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* for later section */}
            <div className="bg-white dark:bg-gray-800 overflow-hidden relative border shadow-xl">
                <div className="text-start lg:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        {/* <span className="block">
                            Book for later ?
                        </span> */}
                        <span className="block ">
                            Or you can book an <span className="text-red-500">ambulance</span> for later
                        </span>
                    </h2>
                    <p className="text-xl mt-4 text-gray-400">
                        Get an affordable Ambulance Service to shift your loved one anywhere. Call our patient transport. specialist to discuss your need. Review transport options and. evaluate needs with loved ones. We coordinate, process, and schedule your trip.
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                            <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
                <img src="/pregnantwomen.jpg" alt="women" className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0" />
            </div>

        </div>
    );
};

export default Hero;