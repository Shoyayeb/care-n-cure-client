import React from 'react';
import { AiOutlineWarning } from "react-icons/ai";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main
            aria-labelledby="pageTitle"
            className="flex items-center justify-center h-screen bg-gray-100 dark:bg-dark dark:text-light"
        >
            <div className="p-4 space-y-4">
                <div className="flex flex-col items-start space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3">
                    <p className="font-semibold text-red-500 text-9xl dark:text-red-600">404</p>
                    <div className="space-y-2">
                        <h1 id="pageTitle" className="flex items-center space-x-2">
                            <AiOutlineWarning></AiOutlineWarning>
                            <span className="text-xl font-medium text-gray-600 sm:text-2xl dark:text-light">
                                Oops! Page not found.
                            </span>
                        </h1>
                        <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                            The page you ara looking for was not found.
                        </p>
                        <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                            You may return to
                            <Link to="/home" className="ml-2 text-blue-600 hover:underline dark:text-blue-500">home page</Link> or try
                            using the search form.
                        </p>
                    </div>
                </div>

                <form action="#" method="POST">
                    <div className="flex items-center justify-center">
                        <input
                            type="text"
                            name="search"
                            placeholder="What are you looking for?"
                            className="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:ring-blue-400 dark:bg-darker dark:focus:ring-blue-800"
                        />
                        <button
                            className="p-2 text-white rounded-r-md bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 focus:outline-none focus:ring focus:ring-primary-light dark:focus:ring-primary-darker"
                        >
                            <span className="sr-only">Search</span>
                            <FaSearch className="w-6 h-6"></FaSearch>
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default NotFound;