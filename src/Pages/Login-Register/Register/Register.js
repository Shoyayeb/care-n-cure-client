import { LockClosedIcon } from '@heroicons/react/solid';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

export default function Register() {


    const handleForm = (e) => {
        e.preventDefault();
    }
    const { error, signInUsingGoogle, signInUsingGithub, createUserWithEmail, emailChange, passChange, nameChange, formEmail, formPass, formName } = useAuth();

    // console.log(formName);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="/logo.png"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register your new account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Login to existing account
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleForm}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Full Name
                            </label>
                            <input
                                onChange={nameChange}
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="first-name"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="User name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                onChange={emailChange}
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                onChange={passChange}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>


                    <div>
                        {error ? <p className="text-red-600 font-bold">{error}</p> : ''}
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={() => { createUserWithEmail(formEmail, formPass, formName) }}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Sign up
                        </button>
                    </div>
                    <div

                        className="flex gap-4 item-center">

                        <button onClick={signInUsingGoogle} type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            <FaGoogle width="20" height="20" fill="currentColor" className="mr-2" />
                            Google
                        </button>
                        <button onClick={signInUsingGithub} type="button" className="py-2 px-4 flex justify-center items-center  bg-green-700 hover:bg-green-800 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            <FaGithub width="20" height="20" fill="currentColor" className="mr-2" />
                            Github
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}