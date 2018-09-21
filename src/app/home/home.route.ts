import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from './home-index/home-index.component';

export const routes: Routes = [
    {path: "", component: HomeIndexComponent, children: [
        // {path: '', loadChildren: ''},
    ]},
]

export const routing = RouterModule.forChild(routes);