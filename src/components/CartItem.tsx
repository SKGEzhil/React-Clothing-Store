import React, {useContext} from 'react';
import {AppContext} from "../app_context.tsx";

interface CartItemProps {
    id: number;
    image: string;
    title: string;
    seller: string;
    size: number[];
    selectedSize: number;
    quantity: number;
    finalPrice: number;
    originalPrice: number;
    discount: number;
    onRemove: () => void;
    onSizeChange: (size: number) => void;
    onQuantityChange: (quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
                                               id,
                                               image,
                                               title,
                                               seller,
                                               size,
                                                selectedSize,
                                               quantity,
                                               finalPrice,
                                               originalPrice,
                                               discount,
                                               onRemove,
                                               onSizeChange,
                                               onQuantityChange,
                                           }) => {

    const {selectedItems, setSelectedItems} = useContext(AppContext);

    const sizeList = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    return (
        <div className="flex items-center justify-between p-4 rounded-lg shadow-lg">
            <div className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-red-500"
                       checked={selectedItems.some((item) => item.id === id)}
                       onChange={() => {
                           console.log(id)
                           const newSelectedItems = selectedItems.some((item) => item.id === id) ? selectedItems.filter((item) => item.id !== id) : [...selectedItems, {
                               id,
                               size,
                               selectedSize,
                               quantity,
                               finalPrice,
                               originalPrice,
                               discount,
                               title,
                               image,
                               rating: 0,
                               reviews: 0
                           }];
                           setSelectedItems(newSelectedItems);
                       }}
                />
                <img src={image} alt={title} className="w-20 h-20 object-cover ml-4 rounded-lg"/>
                <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-500">Sold by: {seller}</p>
                    <div className="flex items-center mt-2 space-x-4">
                        <div>
                            <label htmlFor="size" className="text-sm text-gray-500">Size:</label>
                            <select
                                id="size"
                                value={selectedSize === 6 ? 0 : selectedSize}
                                onChange={(e) => onSizeChange(Number(e.target.value))}
                                className="ml-2 border border-gray-300 rounded-md text-sm"
                            >
                                {size.map((s, index) => (
                                    <option key={index} value={s}>{sizeList[s]}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="quantity" className="text-sm text-gray-500">Qty:</label>
                            <select
                                id="quantity"
                                value={quantity}
                                onChange={(e) => onQuantityChange(Number(e.target.value))}
                                className="ml-2 border border-gray-300 rounded-md text-sm"
                            >
                                {[1, 2, 3, 4, 5].map((qty) => (
                                    <option key={qty} value={qty}>{qty}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-4 ml-10">
                <div className="text-right">
                    <p className="text-lg font-bold text-gray-800">₹{finalPrice}</p>
                    <p className="text-sm text-gray-500 line-through">₹{originalPrice}</p>
                    <p className="text-sm text-green-600">{discount}% OFF</p>
                </div>
                <button onClick={onRemove} className="text-gray-400 hover:text-gray-600">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CartItem;
