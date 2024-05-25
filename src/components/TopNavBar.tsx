import React, {useContext, useState} from 'react';
import { FaShoppingCart, FaUser} from "react-icons/fa";
import SearchBar from "./SearchBar.tsx";
import {NavLink, useNavigate} from "react-router-dom";
import {AppContext} from "../app_context.tsx";
import {TiThMenu} from "react-icons/ti";
import Menu from "./Menu.tsx";
import {base_route} from "../App.tsx";

const TopNavBar: React.FC = () => {

    const navigate = useNavigate();
    const {cartItems} = useContext(AppContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="">
            <Menu isOpen={isMenuOpen} onClose={() => {
                setIsMenuOpen(false);
            } }/>
            <div
                className="bg-white border-b border-gray-200 shadow-sm fixed flex w-full justify-between items-center p-4">
                {/* Logo */}

                <div className="flex justify-between items-center">
                    <button onClick={() => {
                        isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
                        console.log("Menu Open: ", isMenuOpen);
                    }}>
                        <TiThMenu className="mr-2 md:hidden"/>
                    </button>
                    <NavLink to={`${base_route}`} className="flex items-center text-gray-800 text-lg font-semibold">
                        React Clothing Store
                    </NavLink>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">

                    <NavLink to={`${base_route}`} className="text-gray-800 hover:text-gray-600">
                        Home
                    </NavLink>
                    <NavLink to={`${base_route}/shop`} className="text-gray-800 hover:text-gray-600">
                        Shop
                    </NavLink>
                    <NavLink to={"#about"} className="text-gray-800 hover:text-gray-600">
                        About Us
                    </NavLink>
                    <NavLink target="_blank" to={"https://github.com/SKGEzhil"} className="text-gray-800 hover:text-gray-600">
                        GitHub
                    </NavLink>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <div className="sm:flex hidden">
                        <SearchBar/>
                    </div>

                    <NavLink to={`${base_route}/cart`}>
                        <button
                            onClick={() => {console.log("Cart Items: ", cartItems)} }
                            className="text-gray-800 hover:text-gray-600">
                            <FaShoppingCart/>
                        </button>
                    </NavLink>

                    <button
                        onClick={() => {navigate("#profile")}}
                        className="text-gray-800 hover:text-gray-600">
                        <FaUser/>
                    </button>
                </div>
            </div>

        </div>

    );
};

export default TopNavBar;
