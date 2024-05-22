import TopNavBar from "../components/TopNavBar.tsx";
import ProductItem from "../components/ProductItem.tsx";
import FilterBar from "../components/FilterBar.tsx";
import {useMediaQuery} from 'react-responsive'
import {useContext} from "react";
import {AppContext} from "../app_context.tsx";


function HomePage() {

    const screen_1700 = useMediaQuery({
        query: '(max-width: 1700px)'
    })
    const screen_1200 = useMediaQuery({
        query: '(max-width: 1200px)'
    })
    const screen_2000 = useMediaQuery({query: '(max-width: 2000px)'})
    const screen_1500 = useMediaQuery({query: '(max-width: 1500px)'})


    const {filteredProductList} = useContext(AppContext);

    return (
        <>
            <div className="relative z-20">
                <TopNavBar/>

            </div>

            <div className="relative top-20">
                <div className="fixed">
                    <FilterBar/>
                </div>
                <div className="flex">
                    <div className="w-72"></div>
                    <div
                        className={`grow grid ${screen_1200 ? "grid-cols-2" : screen_1500 ? "grid-cols-3" : screen_1700 ? "grid-cols-4" : screen_2000 ? "grid-cols-5" : "grid-cols-6"} gap-5 mr-2}`}>
                        {
                            filteredProductList.map((product) => {
                                return (
                                    <ProductItem
                                        id={product.id}
                                        size={product.size}
                                        image={product.image}
                                        title={product.title}
                                        rating={product.rating}
                                        reviews={product.reviews}
                                        originalPrice={product.originalPrice}
                                        discount={product.discount}
                                        finalPrice={product.finalPrice} quantity={1}/>
                                );
                            })
                        }
                    </div>
                </div>

            </div>


        </>
    );
}

export default HomePage;
