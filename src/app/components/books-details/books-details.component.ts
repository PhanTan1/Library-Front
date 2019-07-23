import { CartService } from 'src/app/services/cart.service';
import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/domain/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss']
})

export class BooksDetailsComponent implements OnInit {
  pageTitle: string = 'Book Details';
  book?: Book;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksService: BooksService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params.id;
      console.log('Récupéré le id suivant : ' + id);
      this.getBook(id);
    });
  }
  getBook(id: number) {
     this.booksService.getBookById(id)
     .subscribe(
       arg => {this.book = arg;
              // console.log('Récupéré le book: ' + this.book);
       },
       err => console.log ('Attention, il y a eul\' erreur:' + err)
       );
  }
  onBack(): void {
    this.router.navigate(['/list']);
  }
  addToCart() {
    this.cartService.addToCart(this.book);
    console.log('>>>>  Dans addToCart()');
    console.log('>>>>  Taille de la cart: ' + this.cartService.getCartLength());
    this.router.navigate(['/list']);
  }
}
