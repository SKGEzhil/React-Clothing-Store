import React from 'react';
import SearchBar from './SearchBar';
import {NavLink} from "react-router-dom";

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 bg-white p-6 z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-lg font-semibold">React Clothing Store</h1>
                <button onClick={onClose} className="text-gray-700 hover:text-gray-900">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <SearchBar />
            <nav className="mt-6 flex justify-between items-centerx">
                <ul className="space-y-4">
                    <li>
                        <NavLink to={"/app"} className="text-2xl text-gray-900 hover:text-gray-700">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/app/shop"} className="text-2xl text-gray-900 hover:text-gray-700">
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"#about"} className="text-2xl text-gray-900 hover:text-gray-700">
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"#github"} className="text-2xl text-gray-900 hover:text-gray-700">
                            GitHub
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
