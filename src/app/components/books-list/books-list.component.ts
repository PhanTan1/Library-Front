import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/domain/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  data: Book[];

  constructor(private service:BooksService) { }

  ngOnInit() {
    this.data= this.service.getAllBooks(
      response => console.log('Attention, il y a l\'erreur: '+erreur)

    );
  }

}
