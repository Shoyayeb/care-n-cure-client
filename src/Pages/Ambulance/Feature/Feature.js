import React from 'react';

const Feature = () => {
    return (
        <div className="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
            <div className="relative">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
                        <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                            Features
                        </p>
                        <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                            Our ambulance services are one of the reliable and expedite ambulance services in Bangladesh.
                        </h4>
                        <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                            We provide AC and Non AC ambulance services ambulance Stretcher wheelchair, oxygen cylinder, and first aid box.
                        </p>
                        <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                            <li className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        Ac/Non-Ac Available
                                    </span>
                                </div>
                            </li>
                            <li className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        Freezer van ambulance
                                    </span>
                                </div>
                            </li>
                            <li className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        24/24 support
                                    </span>
                                </div>
                            </li>
                            <li className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        Stretcher, wheelchair
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                        <div className="relative space-y-4">
                            <div className="flex items-end justify-center lg:justify-start space-x-4">
                                <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src="/ambulance1.jpg" alt="1" />
                                <img className="rounded-lg shadow-lg w-40 md:w-64" width="260" src="/ambulance2.jpg" alt="2" />
                            </div>
                            <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                                <img className="rounded-lg shadow-lg w-24 md:w-40" width="170" src="/ambulance3.jpg" alt="3" />
                                <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src="/ambulance4.jpg" alt="4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;