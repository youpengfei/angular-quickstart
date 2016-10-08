import {NgModule, ModuleWithProviders} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import "./rxjs-extensions";
import {UserService, UserServiceConfig} from "./core/user.service";
import {CoreModule} from "./core/core.module";
import {ContactModule} from "./contact/contact.module";


@NgModule({
    imports: [
        BrowserModule,
        ContactModule,
        CoreModule.forRoot({userName: '尤鹏飞'}),
        routing
    ],
    providers: [UserService],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}

