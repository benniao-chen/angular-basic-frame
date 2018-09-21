import { NgModule } from "@angular/core";
import { Routes, RouterModule, NoPreloading, PreloadAllModules, PreloadingStrategy} from '@angular/router';


export const Routers: Routes = [
    {path: "", redirectTo: "Home", pathMatch: "prefix"},
    {path: "Home", loadChildren: "./home/home.module#HomeModule"},
    {path: "Login", loadChildren: "./login/login.module#LoginModule"},
];

export const Routing = RouterModule.forRoot(Routers, {
    preloadingStrategy: NoPreloading, //PreloadAllModules
    // useHash: true,
})