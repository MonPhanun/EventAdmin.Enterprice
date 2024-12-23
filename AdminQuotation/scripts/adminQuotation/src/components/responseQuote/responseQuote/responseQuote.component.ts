import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";;

export @Component({
    selector: 'respnseq-component',
    templateUrl: '../../../templates/admin/responseQuote/responseQuote/index.html',
})
class responseQuoteComponent implements OnInit {
    private route: Router = inject(Router);
    constructor() { }

    ngOnInit(): void {
   
    }



}