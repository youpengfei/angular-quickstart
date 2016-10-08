import {Component} from "@angular/core";
import {UserService} from "../core/user.service";


@Component({
    template: `
    <h2>Heroes of {{userName}}</h2>
    <router-outlet></router-outlet>
  `
})
export class HeroComponent {

    userName = '';

    constructor(userService: UserService) {
        this.userName = userService.userName;
    }


}
