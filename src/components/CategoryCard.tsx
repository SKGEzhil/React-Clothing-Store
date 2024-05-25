import React from 'react';

interface CategoryCardProps {
    image: string;
    title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title }) => {
    return (
        <div className="cursor-pointer relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                {title}
            </div>
        </div>
    );
};

export default CategoryCard;
