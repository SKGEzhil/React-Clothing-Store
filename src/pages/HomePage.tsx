import Banner from "../components/Banner.tsx";
import TopNavBar from "../components/TopNavBar.tsx";
import CategoryCard from "../components/CategoryCard.tsx";

function HomePage() {

    const categories = [
        {
            image: 'https://via.placeholder.com/400x500',
            title: 'WOMEN',
        },
        {
            image: 'https://via.placeholder.com/400x500',
            title: 'MEN',
        },
        {
            image: 'https://via.placeholder.com/400x500',
            title: 'KIDS',
        },
    ];

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
                            <CategoryCard key={index} image={category.image} title={category.title}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;