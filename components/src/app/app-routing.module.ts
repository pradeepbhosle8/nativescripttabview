import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import {HomeComponent} from './tabview/home/home.component';
import { AboutComponent } from "./tabview/about/about.component";
import { PortfolioComponent } from "./tabview/portfolio/portfolio.component";
import { ContactComponent } from "./tabview/contact/contact.component";
import { TabviewCompnent} from './tabview/tabview.component';
import {AuthComponent} from './auth/auth.component';


const routes: Routes = [
    // { path: "", redirectTo: "/items", pathMatch: "full" }
//     {path: '', 
//     redirectTo: "/(homeTab:home/default//aboutTab:about/default//portfolioTab:portfolio/default//contactTab:contact/default)",
//     pathMatch: "full"
// },
    {path:'',
    component: AuthComponent,
    pathMatch: "full" },

   

    {path: 'tabview', component: TabviewCompnent, 
    children: [

        {path: 'home', 
        component: HomeComponent, 
        outlet: 'homeTab'},
        
        {path: 'about', 
        component: AboutComponent, 
        outlet: 'aboutTab'},
        
        {path: 'portfolio', 
        component: PortfolioComponent, 
        outlet: 'portfolioTab'},
        
        {path: 'contact', 
        component: ContactComponent, 
        outlet: 'contactTab'}

    ]}

   
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
