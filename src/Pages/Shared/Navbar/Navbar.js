import { Disclosure, Menu } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { React } from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';


const navigation = [
    { name: 'Home', href: '/home', current: true, customClass: '' },
    { name: 'Online Doctor', href: '/onlinedoctor', current: false, customClass: '' },
    { name: 'Ambulance', href: '/ambulance', current: false, customClass: 'text-red-500' },
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const { user, logOut } = useAuth();
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-10 w-auto"
                                        src="/logodark.png"
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-12 w-auto"
                                        src="/logodark.png"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium '
                                                ) + item.customClass}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {user.email ? <p className="bg-gray-400 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{user.displayName}</p> : ''}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="bg-indigo-700 flex text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            {user.email ? <button
                                                onClick={logOut}
                                                className=' text-gray-200 hover:bg-indigo-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                            >
                                                Logout
                                            </button> : <Link
                                                to="/login"
                                                className=' text-gray-200 hover:bg-indigo-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                            >
                                                Login
                                            </Link>}
                                        </Menu.Button>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(
                                        'bg-gray-900 text-white hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}