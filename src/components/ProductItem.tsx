import React, {useContext, useState} from 'react';
import {AppContext} from "../app_context.tsx";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom";


interface ProductItemProps {
    id: number;
    size: number[];
    image: string;
    quantity: number;
    title: string;
    rating: number;
    reviews: number;
    originalPrice: number;
    discount: number;
    finalPrice: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
                                                     id,
                                                     size,
                                                     quantity,
                                                     image,
                                                     title,
                                                     rating,
                                                     reviews,
                                                     originalPrice,
                                                     discount,
                                                     finalPrice,
                                                 }) => {

    const navigate = useNavigate();
    const {cartItems, setCartItems} = useContext(AppContext);

    const sizeList = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    const [selectedSize, setSelectedSize] = useState<number>(6);

    const isItemInCart = cartItems.some((item) => item.id === id && item.size === size);

    const addToCart = () => {
        const cartList = [...cartItems];
        if (isItemInCart) {
            return
        }
        cartList.push({
            id,
            size,
            selectedSize,
            quantity,
            image,
            title,
            rating,
            reviews,
            originalPrice,
            discount,
            finalPrice,
        });
        setCartItems(cartList);
        toast.success("Added to cart !", {
            position: "top-right",
        });
    }

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} className="text-red-500">★</span>);
            } else {
                stars.push(<span key={i} className="text-gray-300">★</span>);
            }
        }
        return stars;
    };

    return (
        <div className="w-72 mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={image} alt={title} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h3 className="text-gray-900 text-lg font-semibold mb-2 truncate">{title}</h3>
                <div className="flex items-center mb-2">
                    <div className="flex">{renderStars()}</div>
                    <span className="text-gray-600 ml-2">({reviews})</span>
                </div>
                <div className="text-gray-500 text-sm line-through">MRP ₹{originalPrice.toLocaleString()}</div>
                <div className="text-green-600 text-sm">{discount}% Off</div>
                <div className="text-gray-900 text-xl font-bold">₹{finalPrice.toLocaleString()}</div>
                <div className="text-gray-700 font-bold text-lg ">Sizes</div>
                <div className="flex gap-1">
                    {
                        size.map((size) => (
                            <div key={size}
                                 onClick={() => {
                                     if(selectedSize == size) {
                                            setSelectedSize(6);
                                            return;
                                        }
                                     setSelectedSize(size);
                                 }}
                                 className={`cursor-pointer hover:border-red-200 active:border-red-100 ${selectedSize == size ? "text-red-500 bg-red-100 border-red-400" : "text-gray-700"} border rounded-md flex p-1 min-w-8 h-8 justify-center items-center`}
                            >{sizeList[size]}</div>
                        ))
                    }
                </div>

                <button className={`mt-4 w-full ${isItemInCart ? "bg-gray-800 hover:bg-gray-900" : "bg-red-500 hover:bg-red-600"} text-white py-2 rounded-lg`}
                        onClick={() => {
                            isItemInCart ? navigate("/app/cart") : addToCart();
                        }}
                >
                    {isItemInCart ? "View in Cart" : "Add to cart"}
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
