import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import {HomeComponent} from './tabview/home/home.component';
import {AboutComponent} from './tabview/about/about.component';
import {PortfolioComponent} from './tabview/portfolio/portfolio.component';
import {ContactComponent} from './tabview/contact/contact.component';
import {ActionbarComponent} from './Share/actionbar/actionbar.component';
import { TabviewCompnent } from './tabview/tabview.component';
import{ AuthComponent} from './auth/auth.component';
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        PortfolioComponent,
        ContactComponent,
        ActionbarComponent,
        TabviewCompnent,
        AuthComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
