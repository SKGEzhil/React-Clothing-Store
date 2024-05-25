

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Product {
    id: number;
    size: number[];
    image: string;
    title: string;
    // quantity: number;
    rating: number;
    reviews: number;
    originalPrice: number;
    discount: number;
    finalPrice: number;
    category: string;

    constructor(id: number, image: string, title: string, rating: number, reviews: number, originalPrice: number, discount: number, finalPrice: number, category: string) {
        this.id = id;
        this.category = category;
        this.size = [];
        // this.quantity = 1;
        this.image = image;
        this.title = title;
        this.rating = rating;
        this.reviews = reviews;
        this.originalPrice = originalPrice;
        this.discount = discount;
        this.finalPrice = finalPrice;
    }
}

