import { Product } from './product';

export class ShoppingCartItem {
    product: Product;
    quantity: number;

    get totalPrice() {
        return this.product.price * this.quantity;
    }
}