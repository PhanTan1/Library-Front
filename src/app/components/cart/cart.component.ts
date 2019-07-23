import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/app/domain/book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  data: Book[] ;
  totalAmount: number;

  constructor(private service: CartService) { }

  ngOnInit() {
    this.data = this.service.getCartBooks();
    this.totalAmount = this.service.getCartTotalAmount();
    console.log ('##### Dans Cart Component - Taille de la Cart : '+this.totalAmount);
}

order() {
  console.log('Your order has been processed .... ');
    }
}



