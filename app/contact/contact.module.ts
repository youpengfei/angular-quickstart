import {NgModule} from "@angular/core";
import {ContactComponent} from "./contact.component";
import {ContactService} from "./concact.service";
import {routing} from "./contact.routing";
import {SharedModule} from "../shared/shared.module";


@NgModule({
    imports: [ SharedModule,routing],
    declarations: [ContactComponent],
    exports: [ContactComponent],
    providers: [ContactService]
})
export class ContactModule {
}
