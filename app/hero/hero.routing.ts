import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HeroComponent} from "./hero.component";
import {HeroListComponent} from "./hero-list.component";
import {HeroDetailComponent} from "./hero-detail.component";


export const routes: Routes = [
    {
        path: '',
        component: HeroComponent,
        children: [
            {path: '', component: HeroListComponent},
            {path: ':id', component: HeroDetailComponent}
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

