import {Routes, RouterModule} from "@angular/router";
import {HeroesComponent} from "./component/heroes.component";
import {ModuleWithProviders} from "@angular/core";
import {DashboardComponent} from "./component/dashboard.component";
import {HeroDetailComponent} from "./component/hero-detail.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }, {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
