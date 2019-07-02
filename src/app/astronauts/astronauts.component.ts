import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-astronauts',
  templateUrl: './astronauts.component.html',
  styleUrls: ['./astronauts.component.css']
})
export class AstronautsComponent implements OnInit {

  astronauts = [
    "Yuri Gagarin",
    "Alan Shepard",
    "Virgil Grissom",
    "Gherman Titov",
    "John Glenn"
  ];

  addAstronaut(name: string): void {
    this.astronauts.push(name);
  }

  removeAstronaut(name: string): void {
    this.astronauts = this.astronauts.filter(astronaut => astronaut !== name);
  }

  constructor() { }

  ngOnInit() {
  }

}
