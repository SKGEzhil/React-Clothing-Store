import React, {useContext} from 'react';
import { FaShoppingCart, FaUser} from "react-icons/fa";
import SearchBar from "./SearchBar.tsx";
import {NavLink} from "react-router-dom";
import {AppContext} from "../app_context.tsx";

const TopNavBar: React.FC = () => {

    const {cartItems} = useContext(AppContext);

    return (
        <div className="">

            <div
                className="bg-white border-b border-gray-200 shadow-sm fixed flex w-full justify-between items-center p-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <NavLink to="/app" className="flex items-center text-gray-800 text-lg font-semibold">
              <span className="mr-2">
                {/*<svg*/}
                  {/*    className="w-6 h-6"*/}
                  {/*    fill="none"*/}
                  {/*    stroke="currentColor"*/}
                  {/*    viewBox="0 0 24 24"*/}
                  {/*    xmlns="http://www.w3.org/2000/svg"*/}
                  {/*>*/}
                  {/*  <path*/}
                  {/*      strokeLinecap="round"*/}
                  {/*      strokeLinejoin="round"*/}
                  {/*      strokeWidth={2}*/}
                  {/*      d="M12 6v6l4 2"*/}
                  {/*  />*/}
                  {/*</svg>*/}
              </span>
                        React Clothing Store
                    </NavLink>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">

                    <NavLink to={"/app"} className="text-gray-800 hover:text-gray-600">
                        Home
                    </NavLink>
                    <NavLink to={"#shop"} className="text-gray-800 hover:text-gray-600">
                        Shop
                    </NavLink>
                    <NavLink to={"#about"} className="text-gray-800 hover:text-gray-600">
                        About Us
                    </NavLink>
                    <NavLink to={"#github"} className="text-gray-800 hover:text-gray-600">
                        GitHub
                    </NavLink>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <SearchBar/>
                    {/*<button className="text-gray-800 hover:text-gray-600">*/}
                    {/*    <FaSearch/>*/}
                    {/*</button>*/}
                    <NavLink to={"/app/cart"}>
                        <button
                            onClick={() => {console.log("Cart Items: ", cartItems)} }
                            className="text-gray-800 hover:text-gray-600">
                            <FaShoppingCart/>
                        </button>
                    </NavLink>

                    <button className="text-gray-800 hover:text-gray-600">
                        <FaUser/>
                    </button>
                </div>
            </div>

        </div>

    );
};

export default TopNavBar;
