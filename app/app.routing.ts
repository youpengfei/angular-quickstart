import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/contact',
        pathMatch: 'full'
    },
    {
        path: 'crisis',
        loadChildren: 'app/crisis/crisis.module#CrisisModule'
    },
    {
        path: 'heroes',
        loadChildren: 'app/hero/hero.module#HeroModule'
    },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
