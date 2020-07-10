import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GoogleBookApiService {

  constructor(private http: Http) { }


  SearchBooks(search) {
    const encodedURI  = "https://www.googleapis.com/books/v1/volumes?q="+ search +"&maxResults=9"
    return this.http.get(encodedURI)
        .map((response: Response) => response.json());
  }

  SearchByISBN(isbn){
  var encodedURI = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn +"&maxResults=1";
  return this.http.get(encodedURI)
      .map((response: Response) => response.json());
}

  
}
