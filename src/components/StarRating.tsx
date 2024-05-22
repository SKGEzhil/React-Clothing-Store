import React from 'react';
import {FaStar} from "react-icons/fa";


interface StarRatingProps {
    rating: number;
    onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({rating, onRatingChange}) => {
    return (
        <div className="flex items-center">
            {[1, 2, 3, 4, 5].map(star => (
                <FaStar
                    key={star}
                    className={`w-6 h-6 cursor-pointer ${star <= rating ? 'text-red-500' : 'text-gray-300'}`}
                    onClick={() => onRatingChange(star)}
                />
            ))}
        </div>
    );
};

export default StarRating;
