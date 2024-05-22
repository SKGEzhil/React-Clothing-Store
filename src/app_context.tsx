import {createContext} from "react";


type AppContextType = {
    filteredProductList: Product[];
    setFilteredProductList: (products: Product[]) => void;
    cartItems: CartItemType[];
    setCartItems: (items: CartItemType[]) => void;
    selectedItems: CartItemType[];
    setSelectedItems: (items: CartItemType[]) => void;
};

export const AppContext = createContext<AppContextType>({
    filteredProductList: [],
    setFilteredProductList: () => {},
    cartItems: [],
    setCartItems: () => {},
    selectedItems: [],
    setSelectedItems: () => {},
});
