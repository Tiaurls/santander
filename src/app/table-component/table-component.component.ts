import { Component, OnInit } from '@angular/core';
export interface PricesFX {
  instrument_name: string;
  id: number;
  bid: number;
  ask: number;
  timestamp: string;
}

const SPOT_PRICES: PricesFX[] = [
  { "id": 1, "instrument_name": "EUR/USD", "bid": 1.1000, "ask": 1.2000, "timestamp": "01-06-2020 12:01:01:001" },
  { "id": 2, "instrument_name": "EUR/JPY", "bid": 119.60, "ask": 119.90, "timestamp": "01-06-2020 12:01:02:001" },
  { "id": 3, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:001" },
  { "id": 4, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:100" },
  { "id": 1, "instrument_name": "EUR/USD", "bid": 1.1000, "ask": 1.2000, "timestamp": "01-06-2020 12:01:01:001" },
  { "id": 2, "instrument_name": "EUR/JPY", "bid": 119.60, "ask": 119.90, "timestamp": "01-06-2020 12:01:02:001" },
  { "id": 3, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:001" },
  { "id": 1, "instrument_name": "EUR/USD", "bid": 1.1000, "ask": 1.2000, "timestamp": "01-06-2020 12:01:01:001" },
  { "id": 2, "instrument_name": "EUR/JPY", "bid": 119.60, "ask": 119.90, "timestamp": "01-06-2020 12:01:02:001" },
  { "id": 3, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:001" },
  { "id": 1, "instrument_name": "EUR/USD", "bid": 1.1000, "ask": 1.2000, "timestamp": "01-06-2020 12:01:01:001" },
  { "id": 2, "instrument_name": "EUR/JPY", "bid": 119.60, "ask": 119.90, "timestamp": "01-06-2020 12:01:02:001" },
  { "id": 3, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:001" },
  { "id": 1, "instrument_name": "EUR/USD", "bid": 1.1000, "ask": 1.2000, "timestamp": "01-06-2020 12:01:01:001" },
  { "id": 2, "instrument_name": "EUR/JPY", "bid": 119.60, "ask": 119.90, "timestamp": "01-06-2020 12:01:02:001" },
  { "id": 3, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:001" },
  { "id": 1, "instrument_name": "EUR/USD", "bid": 1.1000, "ask": 1.2000, "timestamp": "01-06-2020 12:01:01:001" },
  { "id": 2, "instrument_name": "EUR/JPY", "bid": 119.60, "ask": 119.90, "timestamp": "01-06-2020 12:01:02:001" },
  { "id": 3, "instrument_name": "GBP/USD", "bid": 1.2500, "ask": 1.2560, "timestamp": "01-06-2020 12:01:02:001" }
];

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'instrument_name', 'bid', 'ask', 'timestamp'];
  dataSource = SPOT_PRICES;

  constructor() { }

  ngOnInit(): void {
  }


}