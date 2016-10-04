import {Component, OnInit} from "@angular/core";
import {UserService} from "../../service/user.service";
import {Contact, ContactService} from "../../service/concact.service";

@Component({
    moduleId: module.id,
    selector: 'app-contact',
    templateUrl: '../../template/contact/contact.component.html',
    styleUrls: ['../../css/contact/contact.component.css']
})
export class ContactComponent implements OnInit {
    contact: Contact;
    contacts: Contact[];
    msg = 'Loading contacts ...';
    userName = '';

    constructor(private contactService: ContactService, userService: UserService) {
        this.userName = userService.userName;
    }

    ngOnInit() {
        this.contactService.getContacts().then(contacts => {
            this.msg = '';
            this.contacts = contacts;
            this.contact = contacts[0];
        });
    }

    next() {
        let ix = 1 + this.contacts.indexOf(this.contact);
        if (ix >= this.contacts.length) {
            ix = 0;
        }
        this.contact = this.contacts[ix];
    }

    onSubmit() {
        // POST-DEMO TODO: do something like save it
        this.displayMessage('Saved ' + this.contact.name);
    }

    newContact() {
        this.displayMessage('New contact');
        this.contact = {id: 42, name: ''};
        this.contacts.push(this.contact);
    }

    /** Display a message briefly, then remove it. */
    displayMessage(msg: string) {
        this.msg = msg;
        setTimeout(() => this.msg = '', 1500);
    }
}
