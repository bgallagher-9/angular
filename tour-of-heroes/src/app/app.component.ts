import { Component } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <router-outlet></router-outlet>
    `,
  styleUrls: [ './app.component.css' ],
})

export class AppComponent {
  title = 'Tour of Heroes';
}
