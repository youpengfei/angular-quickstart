import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
  <app-title [subtitle]="subtitle"></app-title>
  <nav>
    <a routerLink="contact" routerLinkActive="active">Contact</a>
    <a routerLink="crisis"  routerLinkActive="active">Crisis Center</a>
    <a routerLink="heroes"  routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
    title = 'Tour of Hero';
    subtitle = "(Final)";
}








