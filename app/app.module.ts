import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./component/app.component";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./component/hero-detail.component";
import {routing} from "./app.routing";
import {DashboardComponent} from "./component/dashboard.component";
import {HeroesComponent} from "./component/heroes.component";
import {HeroService} from "./service/hero.service";
import {InMemoryDataService} from "./in-memory-data.service";
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import {HttpModule} from "@angular/http";
import './rxjs-extensions';
import {HeroSearchComponent} from "./component/hero-search.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

