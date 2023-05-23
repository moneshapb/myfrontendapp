import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  key = "AIzaSyCGC083f5m4-6LC5at4Nyb9UXsMxbMYyr8";
  constructor(private httpClient: HttpClient) {}
  get(queryField: string) {
    return this.httpClient.get(
      `https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=39&keyes&key=${this.key}`
    );
  }
}
