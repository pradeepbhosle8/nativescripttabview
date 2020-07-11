import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'ns-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css'],
    moduleId: module.id
})

export class PortfolioComponent implements OnInit{
    constructor(){}

    ngOnInit(){
        console.log('Portfolio components');
    }
}