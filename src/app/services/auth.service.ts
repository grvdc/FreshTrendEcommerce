import { Injectable, } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  domain = environment.baseUrl;
  apiKey = '74e37f3412f07c416015254388b0404a';
  password = '7f46f7bf0452eb854fa458293586b4f5';
  store = 'kiwi-diamond.myshopify.com';

  fullUrl = this.domain + '?key=' + this.apiKey + '&pass=' + this.password + '&store=' + this.store;
  constructor(public HttpClient: HttpClient,) { }

  newApi() {
    return this.HttpClient.get(this.fullUrl +  '&return=products.json');
    // return this.HttpClient.get(this.fullUrl +  '&return=products.json?product_type=Cartilage');

  }
  
  getProductsByCategories(category){
    return this.HttpClient.get(this.fullUrl +  '&return=products.json?product_type='+category);
  }
}
