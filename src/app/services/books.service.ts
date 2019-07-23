import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../domain/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  URL: string = 'http://localhost:8080/books';

  constructor(private client: HttpClient) { }
  public getAllBooks(): Observable<Book[]>{
    return this.client.get<Book[]>(this.URL);
  }

  public getBookById(id: number): Observable<Book> {
    return this.client.get<Book>(this.URL + '/' + id);
  }
}
