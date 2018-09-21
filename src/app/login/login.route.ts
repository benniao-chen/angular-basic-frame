import { Routes, RouterModule } from '@angular/router';
import { LoginIndexComponent } from './login-index/login-index.component';

export const routes: Routes = [
    {path: "", component: LoginIndexComponent, children: [
        // {path: '', loadChildren: ''},
    ]},
]

export const routing = RouterModule.forChild(routes);