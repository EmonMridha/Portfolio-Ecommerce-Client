import React from 'react';
import { Link } from 'react-router';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOut } = useAuth();
    console.log(user);
    const handleLogout = () => {
        logOut()
            .then(result => {
                Swal.fire('Logged Out Successfully', '', 'success');
            })
            .catch(error => {
                Swal.fire('Logout Failed', error.message, 'error');
            })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm px-4">


            {/* Left - Logo */}
            <div className="navbar-start">
                <Link to="/">NextShop</Link>
            </div>


            {/* Center - Search */}
            <div className=" w-1/2 mr-1 ">

                {/* Search Form */}
                <form
                    className="w-full">


                    {/* Search Icon and Input */}
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 left-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full py-2 text-black pl-10 pr-4 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                        />
                    </div>
                </form>
            </div>


            {/* Right - Buttons */}
            {
                user ? (<button onClick={handleLogout} className='btn bg-amber-700'>
                    LogOut
                </button>) : (<div className="navbar-end gap-2">
                    <Link to="/login" className="btn btn-primary btn-sm">
                        Login
                    </Link>
                    <Link to="/register" className="btn btn-success btn-sm">
                        Register
                    </Link>
                </div>)
            }

        </div>
    );
};

export default Navbar;

