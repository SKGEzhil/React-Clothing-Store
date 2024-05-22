import React, {useContext, useState} from 'react';
import ReactSlider from 'react-slider';
import StarRating from './StarRating';
import {AppContext} from "../app_context.tsx";
import {products} from "../constants.tsx";

const FilterBar: React.FC = () => {

    const {setFilteredProductList} = useContext(AppContext);

    const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([100, 10000]);
    const [rating, setRating] = useState<number>(0);

    const sizeList = ['XSmall', 'Small', 'Medium', 'Large', 'XLarge', 'XXLarge'];

    const handleSizeChange = (size: string, sizeList: string[]) => {
        console.log(size)
        const sizeNo = sizeList.indexOf(size);
        const newSizes = selectedSizes.includes(sizeNo) ? selectedSizes.filter(selectedSize => selectedSize !== sizeNo) : [...selectedSizes, sizeNo];
        console.log(`sizeno: ${sizeNo}`);
        setSelectedSizes(newSizes);
        console.log(newSizes);
    };

    const applyFilters = () => {
        const filteredProducts = products.filter(product => {
            // const isSizeMatch = selectedSizes.includes(product.size);
            const isSizeMatch = () => {
                if (selectedSizes.length === 0) return true;
                return selectedSizes.some(size => product.size.includes(size));
            }
            const isPriceMatch = product.finalPrice >= priceRange[0] && product.finalPrice <= priceRange[1];
            const isRatingMatch = product.rating >= rating;

            return isSizeMatch() && isPriceMatch && isRatingMatch;
        });

        setFilteredProductList(filteredProducts);
    }

    const clearFilters = () => {
        setSelectedSizes([]);
        setPriceRange([100, 10000]);
        setRating(0);
        setFilteredProductList(products);
    }

    return (
        <div className="w-64 p-4 bg-white shadow-lg rounded-lg m-2">
            <div className="flex justify-between">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                <a className="text-red-500 cursor-pointer underline" onClick={clearFilters}>clear filters</a>
            </div>
            <div className="mb-4">
                <h3 className="text-md font-medium mb-2">Sizes</h3>
                <ul>
                    {sizeList.map(size => (
                        <li key={size} className="mb-2">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-red-500"
                                    checked={selectedSizes.includes(sizeList.indexOf(size))}
                                    onChange={() => handleSizeChange(size, sizeList)}
                                />
                                <span className="ml-2 text-gray-700">{size}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="text-md font-medium mb-2">Price range</h3>
                <div className="mb-2">
                    <ReactSlider
                        step={100}
                        className="horizontal-slider"
                        thumbClassName="thumb"
                        trackClassName="track"
                        min={100}
                        max={10000}
                        minDistance={1000}
                        value={priceRange}
                        onChange={value => setPriceRange(value as [number, number])}
                        ariaLabel={['Lower thumb', 'Upper thumb']}
                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        renderThumb={(props) => <div {...props}></div>}
                    />
                    <div className="flex justify-between text-sm text-gray-700 mt-2">
                        <span>₹{priceRange[0]}</span>
                        <span>₹{priceRange[1]}</span>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-md font-medium mb-2">Ratings</h3>
                <div className="flex flex-auto justify-between">
                    <StarRating rating={rating} onRatingChange={setRating}/>
                    <div className="text-m text-gray-700 mt-2 mr-4">
                        <span>{rating}.0</span>
                    </div>
                </div>
            </div>

            <button
                onClick={applyFilters}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
                Apply Filters
            </button>

        </div>
    );
};

export default FilterBar;
