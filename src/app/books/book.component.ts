import { Component, OnInit} from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BookService } from './Bookservice.service';
/*import { Book } from './book';*/


@Component({
  templateUrl:'./book.component.html',
  styleUrls: ['./book.component.css']


})




export class BookComponent implements OnInit {

  pageTitle = 'My Books ';

  book = {
    title: '',
    authors: [''],
    coverImage: '',
    description: '',
    url: '',
  };










constructor(private bookService: BookService) {}
ngOnInit() {
  this.bookService.getBooks().subscribe((response: any) => {
     this.book = response.books;
  });
}

}
