import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4">

            {/* Left - Logo */}
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">NextShop</a>
            </div>

            {/* Center - Search */}
            <div className=" w-1/2 mr-1 sm:flex">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="w-full">
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
            <div className="navbar-end gap-2">
                <button className="btn btn-primary btn-sm">Login</button>
                <button className="btn btn-success btn-sm">Register</button>
            </div>

        </div>
    );
};

export default Navbar;