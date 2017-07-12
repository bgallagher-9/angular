import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  userName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    // console.log(event);
    this.serverCreationStatus = 'Server ' + this.serverName + ' created!';
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetName(event: any) {
    this.userName = ''
  }

}
