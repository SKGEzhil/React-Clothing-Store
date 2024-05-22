import React, {useContext, useState} from 'react';
import {FaSearch} from "react-icons/fa";
import {AppContext} from "../app_context.tsx";
import {products} from "../constants.tsx";

const SearchBar: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const {filteredProductList, setFilteredProductList} = useContext(AppContext);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        console.log('Search text:', e.target.value);
        if (e.target.value === '') {
            setFilteredProductList(products);
            return;
        }
        const filteredProducts = filteredProductList.filter(product => product.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredProductList(filteredProducts);
        // handleSearchClick()
    };

    const handleSearchClick = () => {

        if (searchText === '') {
            setFilteredProductList(products);
            console.log('Search text: empty', searchText);
            return;
        }

        const filteredProducts = filteredProductList.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredProductList(filteredProducts);
        console.log('Search text:', searchText);
    };

    return (
        <div className="flex items-center bg-gray-200 rounded-full px-4 py-1">
            <input
                type="text"
                value={searchText}
                onChange={handleSearchChange}
                placeholder="Search"
                className="flex-grow bg-transparent outline-none text-gray-700 pr-1 text-s"
            />
            <button
                onClick={handleSearchClick}
                className="flex items-center justify-center"
            >
                <FaSearch style={{color: "gray"}}/>
            </button>
        </div>
    );
};

export default SearchBar;
