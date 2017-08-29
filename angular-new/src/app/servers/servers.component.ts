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
  allowClearName = false;
  serverCreated = false

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created.'
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

}
