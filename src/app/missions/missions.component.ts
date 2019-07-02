import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  missions = [
    "Vostok 1",
    "Freedom 7",
    "Liberty Bell 7",
    "Vostok 2",
    "Friendship 7"
  ]

  constructor() { }

  ngOnInit() {
  }

}
