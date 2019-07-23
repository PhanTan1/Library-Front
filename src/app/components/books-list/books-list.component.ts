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
  width: number = 100;

  constructor(private service: BooksService) { }

  ngOnInit() {
    this.service.getAllBooks().subscribe(
      reponse => this.data = reponse,
      erreur => console.log('Attention, il y a l\'erreur: ' + erreur)
  );
  }

}
