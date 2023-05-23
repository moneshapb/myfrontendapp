import { Component, OnInit} from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BookService } from './Bookservice.service';
/*import { Book } from './book';*/


@Component({
  templateUrl:'./book.component.html',
  styleUrls: ['./book.component.css']


})




export class BookComponent implements OnInit {
   books;

  constructor(private BookService: BookService) { }

  OnSearch(s){
    this.BookService.SearchBooks(s)
        .subscribe((data) => {
            this.books = data.items;
        });
  }

  ngOnInit() {
     this.BookService.SearchBooks('javascript')
          .subscribe((data)=>{
             //console.log(data.items)
          })
  }

}

