import TopNavBar from "../components/TopNavBar.tsx";
import {useMediaQuery} from "react-responsive";
import {useContext} from "react";
import {AppContext} from "../app_context.tsx";
import CartItem from "../components/CartItem.tsx";
import CheckoutCard from "../components/CheckoutCard.tsx";


function CartPage() {

    // const screen_1700 = useMediaQuery({
    //     query: '(max-width: 1700px)'
    // })
    // const screen_1200 = useMediaQuery({
    //     query: '(max-width: 1200px)'
    // })
    // const screen_2000 = useMediaQuery({query: '(max-width: 2000px)'})
    // const screen_1500 = useMediaQuery({query: '(max-width: 1500px)'})


    // AppContext
    const {cartItems, setCartItems} = useContext(AppContext);
    const {selectedItems, setSelectedItems} = useContext(AppContext);

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

    // Render Component
    return (
        <>
            <div className="relative z-20">
                <TopNavBar/>
            </div>
            <div className="relative top-20 ml-4">
                <h1 className="text-4xl font-bold ml-4 mb-4">Items in ur cart</h1>
                <div className="flex">
                    <div
                        className={`grow grid row-auto gap-5 mr-0 ml-4}`}>
                        {
                            cartItems.map((product) => {
                                return (
                                    <CartItem
                                        id={product.id}
                                        image={product.image}
                                        title={product.title}
                                        seller={"product.seller"}
                                        size={product.size}
                                        quantity={product.quantity}
                                        finalPrice={product.finalPrice}
                                        originalPrice={product.originalPrice}
                                        discount={product.discount}
                                        onRemove={() => {
                                            const newCartItems = cartItems.filter((item) => item.id !== product.id);
                                            setCartItems(newCartItems);
                                        }}
                                        onSizeChange={(newSize) => {
                                            //TODO: Implement this
                                            }
                                        }
                                        onQuantityChange={(newQuantity) => {
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
                                        }

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
                        onPlaceOrder={
                            function (): void {
                                throw new Error("Function not implemented.");
                            }
                        }
                    />

                </div>

            </div>

        </>
    );
}

export default CartPage;
