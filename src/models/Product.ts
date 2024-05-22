

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

    constructor(id: number, image: string, title: string, rating: number, reviews: number, originalPrice: number, discount: number, finalPrice: number) {
        this.id = id;
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

// enum sizes {
//     xs = 0, s=1, m=2, l=3, xl=4,xxl=5
// }