import React from 'react';

const Details = (props) => {
    const { title, description, img, cost, id } = props.serviceDetails;
    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden relative">
            <div className="lg:text-start text-center lg:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">
                        {title}
                    </span>
                    <span className="block">
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            {description}
                        </p>
                    </span>

                </h2>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">

                        <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Get started {cost ? <p className="inline text-red-400">(Paid)</p> : <p className="text-green-400 inline">(free)</p>}
                        </button>
                    </div>
                </div>
            </div>
            <img src={img} alt="service" className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0" />
        </div>

    );
};

export default Details;