import React from 'react';

interface CheckoutCardProps {
    totalItems: number;
    totalMRP: number;
    discountOnMRP: number;
    couponDiscount: number;
    shippingFee: number;
    totalAmount: number;
    onPlaceOrder: () => void;
}

const CheckoutCard: React.FC<CheckoutCardProps> = ({
                                                       totalItems,
                                                       totalMRP,
                                                       discountOnMRP,
                                                       couponDiscount,
                                                       shippingFee,
                                                       totalAmount,
                                                       onPlaceOrder,
                                                   }) => {
    return (
        <div className="p-4 rounded-lg shadow-lg w-1/4 mx-4 h-min">
            <h2 className="text-lg font-semibold mb-4">PRICE DETAILS ({totalItems} items)</h2>
            <div className="flex justify-between mb-2">
                <span className="text-gray-600">Total MRP</span>
                <span className="text-gray-800">₹{totalMRP.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
                <span className="text-gray-600">Discount on MRP</span>
                <span className="text-green-600">-₹{discountOnMRP.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
                <span className="text-gray-600">Coupon Discount</span>
                <span className="text-green-600">-₹{couponDiscount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping Fee</span>
                <span className="text-gray-800">
          {shippingFee === 0 ? (
              <span className="text-green-600">FREE</span>
          ) : (
              `₹${shippingFee.toLocaleString()}`
          )}
        </span>
            </div>
            <hr className="my-2"/>
            <div className="flex justify-between mb-4">
                <span className="text-lg font-semibold">Total Amount</span>
                <span className="text-lg font-semibold">₹{totalAmount.toLocaleString()}</span>
            </div>
            <button
                onClick={onPlaceOrder}
                className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
            >
                PLACE ORDER
            </button>
        </div>
    );
};

export default CheckoutCard;
