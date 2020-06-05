import { Component } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { PricesFX } from './priceFx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //To test the http service, i uploaded the json structure into 
  // this mocky website and it generates a temp service to test it.

  title = 'SantanderEFX';
  readonly ROOT_URL = "http://www.mocky.io/v2/";
  prices: Observable<PricesFX[]>;
  constructor(private http: HttpClient) { }

  getAllPrices() {
    //Service's endpoint
    this.prices = this.http.get<PricesFX[]>(this.ROOT_URL + "5ed9616a310000f5dec4ed55");
  }

  getLatestPrice(instrument_name) {
    //Set parameter and endpoint
    let params = new HttpParams().set('instrument_name', instrument_name);
    this.prices = this.http.get<PricesFX[]>(this.ROOT_URL + "5ed9616a310000f5dec4ed55", { params });
  }

}
