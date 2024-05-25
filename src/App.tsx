import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import ShopPage from "./pages/ShopPage.tsx";
import {AppContext} from "./app_context.tsx";
import {useState} from "react";
import {products} from "./constants.tsx";
import CartPage from "./pages/CartPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import {ToastContainer} from "react-toastify";

export const base_route = "/React-Clothing-Store";
function App(){

    const [filteredProductList, setFilteredProductList] = useState(products)
    const [cartItems, setCartItems] = useState<CartItemType[]>([])
    const [selectedItems, setSelectedItems] = useState<CartItemType[]>([]);

    const router = createBrowserRouter([

            {
                path: `${base_route}/shop`,
                errorElement: <ErrorPage/>,
                element: <ShopPage />,
            },
            {
                path: `${base_route}/`,
                errorElement: <ErrorPage/>,
                element: <HomePage />,
            },

            {
                path: `${base_route}/cart`,
                element: <CartPage />,
            },

        ]
    );

    return (
        <>

            <AppContext.Provider value={{filteredProductList, setFilteredProductList, cartItems, setCartItems, selectedItems, setSelectedItems}}>
                <RouterProvider router={router} />
                <ToastContainer />
            </AppContext.Provider>

        </>

    )

}

export default App;