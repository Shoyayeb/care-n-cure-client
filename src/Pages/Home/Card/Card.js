import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { title, description, img, cost } = props.service;
    return (
        <div className="overflow-hidden shadow-md rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto hover:shadow-xl">
            <div className="w-full block h-full cursor-default">
                <img alt="servicce" src={img} className="max-h-40 w-full object-cover" />
                <div className="bg-white dark:bg-gray-800 w-full p-4">

                    {cost ? <p className="text-red-500 text-md font-medium">Paid</p> : <p className="text-green-500 text-md font-medium">Free</p>}
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        {title}
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">{description}
                    </p>
                </div>
                <Link
                    to="/more"
                    className="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-6"
                >Read more</Link>
            </div>
        </div >
    );
};

export default Card;