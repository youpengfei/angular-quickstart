import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
import {routing} from "./hero.routing";
import {HeroListComponent} from "./hero-list.component";
import {HeroService} from "./hero.service";
import {HeroComponent} from "./hero.component";


@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [HeroComponent, HeroDetailComponent, HeroListComponent],
    providers: [HeroService]
})
export class HeroModule {
}
