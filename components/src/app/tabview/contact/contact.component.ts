import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'ns-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    moduleId: module.id
})

export class ContactComponent implements OnInit{

    constructor() {
       
    }

    ngOnInit(){
        console.log('Conatct Compnents');
    }
}