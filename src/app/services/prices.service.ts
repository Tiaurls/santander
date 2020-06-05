import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor() { }

  getAllPrices() {
    return [
      { "id": 1, "instrument_name": "EUR/USD", "bid": 1.1000, "ask": 1.2000, "timestamp": "01-06-2020 12:01:01:001" },
      { "id": 2, "instrument_name": "EUR/JPY", "bid": 119.60, "ask": 119.90, "timestamp": "01-06-2020 12:01:02:001" },
      { "id": 3, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:001" },
      { "id": 4, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:100" },
      { "id": 5, "instrument_name": "EUR/USD", "bid": 1.1000, "ask": 1.2000, "timestamp": "01-06-2020 12:01:01:001" },
      { "id": 6, "instrument_name": "EUR/JPY", "bid": 119.60, "ask": 119.90, "timestamp": "01-06-2020 12:01:02:001" },
      { "id": 7, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:001" },
      { "id": 8, "instrument_name": "EUR/USD", "bid": 1.1000, "ask": 1.2000, "timestamp": "01-06-2020 12:01:01:001" },
      { "id": 9, "instrument_name": "EUR/JPY", "bid": 119.60, "ask": 119.90, "timestamp": "01-06-2020 12:01:02:001" },
      { "id": 10, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:001" },
      { "id": 11, "instrument_name": "EUR/USD", "bid": 1.1000, "ask": 1.2000, "timestamp": "01-06-2020 12:01:01:001" },
      { "id": 12, "instrument_name": "EUR/JPY", "bid": 119.60, "ask": 119.90, "timestamp": "01-06-2020 12:01:02:001" },
      { "id": 13, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:001" },
      { "id": 14, "instrument_name": "EUR/USD", "bid": 1.1000, "ask": 1.2000, "timestamp": "01-06-2020 12:01:01:001" },
      { "id": 15, "instrument_name": "EUR/JPY", "bid": 119.60, "ask": 119.90, "timestamp": "01-06-2020 12:01:02:001" },
      { "id": 16, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:001" },
      { "id": 17, "instrument_name": "EUR/USD", "bid": 1.1000, "ask": 1.2000, "timestamp": "01-06-2020 12:01:01:001" },
      { "id": 18, "instrument_name": "EUR/JPY", "bid": 119.60, "ask": 119.90, "timestamp": "01-06-2020 12:01:02:001" },
      { "id": 19, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:001" }
    ];

  }

  getLatestPrice(instrument_name) {

    return [
      { "id": 3, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:001" },
      { "id": 4, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:100" },
      { "id": 7, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:001" }
    ];

  }
}
