import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styles: [`
    p {
      width: 45%;
      height: 20%;
      background-color: red;
      color: white;
      font-size: bold;
      padding: 3px;
      display: inline-block;
      float: left;
    }

  `]
})
export class FailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
