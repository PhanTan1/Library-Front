import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = false;
  cartLength: number = 0;

  constructor(private cart: CartService) {}
  ngOnInit() {
    this.cart.currentCartLengthChanged
      .subscribe(arg => this.cartLength = arg);

  }
}


