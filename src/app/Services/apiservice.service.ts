import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  public BASE_URL = "https://jsonplaceholder.typicode.com"
  constructor(private http:HttpClient) { }

  getList() {
    console.log(1);
    return this.http.get(this.BASE_URL+'/photos');
 }
}
