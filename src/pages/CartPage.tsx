import TopNavBar from "../components/TopNavBar.tsx";
import {useMediaQuery} from "react-responsive";
import {useContext} from "react";
import {AppContext} from "../app_context.tsx";
import CartItem from "../components/CartItem.tsx";
import CheckoutCard from "../components/CheckoutCard.tsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {base_route} from "../App.tsx";


function CartPage() {

    const navigate = useNavigate();

    const screen_1000 = useMediaQuery({
        query: '(max-width: 1000px)'
    })

    // AppContext
    const {cartItems, setCartItems} = useContext(AppContext);
    const {selectedItems, setSelectedItems} = useContext(AppContext);

    const isCartEmpty = cartItems.length == 0;

    // Calculations
    const totalMRP = () => {
        let total = 0;
        console.log('cartItems', selectedItems);
        selectedItems.forEach((item) => {
            total += item.originalPrice * item.quantity;
        });
        console.log('total', total);
        return total;
    }

    const totalDiscount = () => {
        let total = 0;
        console.log('cartItems', selectedItems);
        selectedItems.forEach((item) => {
            total += (item.discount * item.originalPrice * item.quantity) / 100;
        });
        console.log('total', total);
        return total;
    }

    const totalAmount = () => {
        let total = 0;
        console.log('cartItems', selectedItems);
        selectedItems.forEach((item) => {
            total += item.finalPrice * item.quantity;
        });
        console.log('total', total);
        return total;
    }

    const onSizeChange = (newSize: number, product: CartItemType) => {
        const newCartItems = cartItems.map((item) => {
            if (item.id === product.id) {
                return {...item, selectedSize: newSize};
            }
            return item;
        });
        setCartItems(newCartItems);
        const newSelectedItems = selectedItems.map((item) => {
            if (item.id === product.id) {
                return {...item, selectedSize: newSize};
            }
            return item;
        });
        setSelectedItems(newSelectedItems);
    }

    const onQuantityChange = (newQuantity: number, product: CartItemType) => {
        const newCartItems = cartItems.map((item) => {
            if (item.id === product.id) {
                return {...item, quantity: newQuantity};
            }
            return item;
        });
        setCartItems(newCartItems);
        const newSelectedItems = selectedItems.map((item) => {
                if (item.id === product.id) {
                    return {...item, quantity: newQuantity};
                }
                return item;
            }
        );
        setSelectedItems(newSelectedItems);
    }

    const onRemove = (product: CartItemType) => {
        const newCartItems = cartItems.filter((item) => item.id !== product.id);
        const newSelectedItems = selectedItems.filter((item) => item.id !== product.id);
        setCartItems(newCartItems);
        setSelectedItems(newSelectedItems);
    }

    // Render Component
    return (
        <>
            <div className="relative z-20">
                <TopNavBar/>
            </div>
            <div className="relative top-20 mx-4">
                <h1 className="text-4xl font-bold mb-4">{isCartEmpty ? "No Items in ur cart" : "Items in ur cart"}</h1>
                {
                    isCartEmpty ?
                        <button
                            onClick={() => {
                                navigate(`${base_route}/shop`);
                            }}
                            className="px-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                        >
                            Browse More Products
                        </button> :

                        <div className="flex gap-2">
                            <a
                                onClick={() => {
                                    setSelectedItems(cartItems);
                                }}
                                className="text-red-500 underline cursor-pointer hover:text-red-600 active:text-red-500">
                                Select all
                            </a>
                            <a
                                onClick={() => {
                                    setSelectedItems([]);
                                }}
                                className="text-red-500 underline cursor-pointer hover:text-red-600 active:text-red-500">
                                Deselect all
                            </a>
                        </div>

                }
                <div className={`${screen_1000 ? "grid " : "flex"}`}>
                    <div
                        className={`grid grow h-min ${screen_1000 ? "" : "mr-4"}`}>
                        {
                            cartItems.map((product) => {
                                return (
                                    <CartItem
                                        id={product.id}
                                        image={product.image}
                                        title={product.title}
                                        seller={"product.seller"}
                                        size={product.size}
                                        selectedSize={product.selectedSize}
                                        quantity={product.quantity}
                                        finalPrice={product.finalPrice}
                                        originalPrice={product.originalPrice}
                                        discount={product.discount}
                                        onRemove={() => {
                                            onRemove(product);
                                        }}
                                        onSizeChange={(newSize: number) => {
                                            onSizeChange(newSize, product);
                                        }}
                                        onQuantityChange={(newQuantity) => {
                                            onQuantityChange(newQuantity, product);
                                        }}
                                    />
                                );
                            })
                        }
                    </div>

                    <CheckoutCard
                        totalItems={selectedItems.length}
                        totalMRP={totalMRP()}
                        discountOnMRP={totalDiscount()}
                        couponDiscount={0}
                        shippingFee={0}
                        totalAmount={totalAmount()}
                        onPlaceOrder={() => {
                            toast.success(
                                "Order Placed Successfully",
                                {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });

                            setCartItems([]);
                            setSelectedItems([]);

                            }
                        }
                    />

                </div>

            </div>

        </>
    );
}

export default CartPage;
