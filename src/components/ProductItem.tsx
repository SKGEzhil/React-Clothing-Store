import React, {useContext} from 'react';
import {AppContext} from "../app_context.tsx";

interface ProductItemProps {
    id: number;
    size: number;
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

    const {cartItems, setCartItems} = useContext(AppContext);

    const addToCart = () => {
        const cartList = [...cartItems];
        cartList.push({
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
        });
        setCartItems(cartList);
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
                <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                        onClick={addToCart}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
