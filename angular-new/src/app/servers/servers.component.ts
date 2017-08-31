import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = '';
  name = '';
  createName = '';
  serverCreated = false;
  servers = [];
  detailsClicked = 'No details.';
  clickedDetails = false;
  numberOfClicks = [];
  clicked = 1;


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created.';
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // onUpdateName(event: Event) {
  //   this.name = (<HTMLInputElement>event.target).value;
  // }
  //
  // onCreateName() {
  //   this.createName = this.name;
  // }
  //
  // onClearName() {
  //   this.name = '';
  // }

  onDetailsClick() {
    this.detailsClicked = 'Tuna is the secret word for the day.';
    this.clickedDetails = !this.clickedDetails;

    this.numberOfClicks.push(this.numberOfClicks.length + 1);
    console.log(this.numberOfClicks);
  }

  // getClicks() {
  //   return this.numberOfClicks.length > 5 ? 'blue' : 'white';
  // }
  // getFontClicks() {
  //   return this.numberOfClicks.length > 5 ? 'white' : 'black';
  // }

}
