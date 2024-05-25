import React from 'react';
import { FaPhone, FaShippingFast} from "react-icons/fa";
import {FaMoneyBillTransfer} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";

const Banner: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="relative bg-gray-100 py-16">
            <div className="container px-6 mx-auto md:px-12 lg:px-20 flex flex-col lg:gap-48 md:flex-row justify-between items-center">
                <div className="flex-1 grow ">
                    <div className="bg-white inline-block rounded-full px-4 py-2 mb-4">
                        <span className="text-gray-700 font-medium">Enjoy 50% OFF in Our Summer Super Sale!</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        Step into Fashion at Your Ultimate Style Destination!
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Explore a World of Fashion Possibilities with Exclusive Discounts - Dive into Your Ultimate Style Destination and Elevate Your Wardrobe Today!
                    </p>
                    <button
                        onClick={() => {
                            navigate("/app/shop")
                        }}
                        className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900">
                        Shop Now &rarr;
                    </button>
                </div>
                <div className=" mt-8 md:mt-0">
                    <img src="https://via.placeholder.com/400x500" alt="Promotion" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
            <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:gap-4 gap-12 text-center">
                    <div>
                        <FaShippingFast size={45} className="mx-auto mb-2"/>
                        <h3 className="text-lg font-semibold text-gray-900">Free Shipping</h3>
                        <p className="text-gray-600">Free Shipping for orders above $180</p>
                    </div>
                    <div>
                        <FaMoneyBillTransfer size={45} className="mx-auto mb-2"/>
                        <h3 className="text-lg font-semibold text-gray-900">Flexible Payment</h3>
                        <p className="text-gray-600">Multiple secure payment options</p>
                    </div>
                    <div>
                        <FaPhone size={45} className="mx-auto mb-2"/>
                        <h3 className="text-lg font-semibold text-gray-900">24x7 Support</h3>
                        <p className="text-gray-600">We support online all days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
