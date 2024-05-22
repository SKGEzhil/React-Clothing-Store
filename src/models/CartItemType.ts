// eslint-disable-next-line @typescript-eslint/no-unused-vars
class CartItemType {
    id: number;
    size: number;
    image: string;
    title: string;
    rating: number;
    reviews: number;
    originalPrice: number;
    discount: number;
    finalPrice: number;
    quantity: number;

    constructor(id: number, size: number, image: string, title: string, rating: number, reviews: number, originalPrice: number, discount: number, finalPrice: number, quantity: number) {
        this.id = id;
        this.size = size;
        this.image = image;
        this.title = title;
        this.rating = rating;
        this.reviews = reviews;
        this.originalPrice = originalPrice;
        this.discount = discount;
        this.finalPrice = finalPrice;
        this.quantity = quantity;
    }
}