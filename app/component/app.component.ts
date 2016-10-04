import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    <a routerLink="/contact" routerLinkActive="active">Contact</a>
  </nav>
  <router-outlet></router-outlet>
`, styleUrls: ['../css/app.component.css'],
})

export class AppComponent {
    title = 'Tour of Hero';
}








