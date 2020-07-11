import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";
import{Page} from 'tns-core-modules/ui/page/page';

@Component({
    selector: 'ns-tabview',
    templateUrl:'./tabview.component.html',
    styleUrls: ['./tabview.component.css'],
    moduleId: module.id
})

export class TabviewCompnent implements OnInit{ 

    constructor(
        private router: RouterExtensions,
        private active: ActivatedRoute,
        private page: Page,
        

    ) {}

    ngOnInit(){
        console.log('tabview components');
        this.router.navigate([{outlets: { homeTab: ['home'], aboutTab: ['about'], portfolioTab: ['portfolio'],contactTab: ['contact']  } }],
        { relativeTo: this.active  }
        );
        this.page.actionBarHidden = true;
    }


}