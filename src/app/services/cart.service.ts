import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../domain/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartData: Book[] = [];
  private messageSource = new BehaviorSubject(0);
  currentCartLengthChanged = this.messageSource.asObservable();

  constructor() {}

  addToCart(book: Book): void {
    // Test if the product is already in the cart
    if (this.cartData.indexOf(book) === -1) {
      this.cartData.push(book);
      this.messageSource.next(this.cartData.length);
    }
  }

  getCartBooks(): Book[] {
    return this.cartData;
  }

  getCartLength(): number {
    return this.cartData.length;
  }

  getCartTotalAmount(): number {
    let total = 0;
    this.cartData.forEach(record => (total += record.price));
    return total;
  }

  resetCart(): void {
    this.cartData = [];
  }
}
