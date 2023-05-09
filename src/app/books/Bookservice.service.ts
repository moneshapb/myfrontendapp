import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = '"https://openlibrary.org/works/OL45804W.json" + `${scope.query}`';




  constructor (private http:HttpClient) {}

getBooks(){

  const url = `${this.apiUrl}/books`;
  return this.http.get(url);
}


}
