import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-reach-sikkim',
  templateUrl: './how-to-reach-sikkim.component.html',
  styleUrls: ['./how-to-reach-sikkim.component.css']
})
export class HowToReachSikkimComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
