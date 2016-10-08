import {Component, Input} from '@angular/core';
import {UserService} from "../service/user.service";

@Component({
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: '../template/title.component.html',
})
export class TitleComponent {
    @Input() subtitle = '';
    title = 'Angular Modules';
    user = '';

    constructor(userService: UserService) {
        this.user = userService.userName;
    }
}