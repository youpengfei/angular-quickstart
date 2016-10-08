import { ModuleWithProviders } from '@angular/core';
import { Routes,
    RouterModule }        from '@angular/router';

import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list',    component: CrisisListComponent },
    { path: ':id', component: CrisisDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
