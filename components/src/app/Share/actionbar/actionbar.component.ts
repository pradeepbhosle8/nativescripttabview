import { Component, OnInit, Input} from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    selector: 'ns-actionbar',
    templateUrl: './actionbar.component.html',
    styleUrls:['./actionbar.component.css'],
    moduleId: module.id
})

export class ActionbarComponent implements OnInit{
    @Input() title: string;
    @Input() showBackButton = true;

    constructor(
        private router: RouterExtensions
    ){}

    ngOnInit(){

    }
    
    get canGoBack() {
    return this.router.canGoBack() && this.showBackButton;
    }

    onGoBack(){
        this.router.back();
    }

}