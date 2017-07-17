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
  servers = ['TestServer', 'TestServer 2'];
  details = 'Your password is tuna.';
  detailsOn = false;
  log = [];
  v: number;

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
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetName(event: any) {
    this.userName = ''
  }

  showDeets() {
    this.detailsOn = (!this.detailsOn);
    console.log('click', this.detailsOn);
    // this.log.push(this.log.length+1);
    this.log.push(new Date());
    console.log(this.log);
  }

 
}
