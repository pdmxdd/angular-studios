import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries = [
    "Soviet Union",
    "United States",
    "United States",
    "Soviet Union",
    "United States",
  ];

  addCountry(name: string): void {
    this.countries.push(name);
  }

  removeCountry(name: string): void {
    this.countries = this.countries.filter(
      country => country !== name
    );
  }

  constructor() { }

  ngOnInit() {
  }

}
