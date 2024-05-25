import Banner from "../components/Banner.tsx";
import TopNavBar from "../components/TopNavBar.tsx";
import CategoryCard from "../components/CategoryCard.tsx";
import {AppContext} from "../app_context.tsx";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {categories, products} from "../constants.tsx";
import {base_route} from "../App.tsx";

function HomePage() {

    const {setFilteredProductList} = useContext(AppContext);
    const navigate = useNavigate();

    return(
        <>
            <div className="relative z-20">
                <TopNavBar/>
            </div>
            <div className="relative top-20">
                <Banner/>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        {categories.map((category, index) => (
                            <CategoryCard key={index} image={category.image} onClick={() => {
                                console.log('Category Clicked: ', category.title);
                                setFilteredProductList(products.filter(product => product.category === category.title.toLowerCase()));
                                navigate(`${base_route}/shop`)
                            }} title={category.title}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;