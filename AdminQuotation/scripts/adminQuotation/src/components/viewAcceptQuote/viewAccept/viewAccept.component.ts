import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";


export @Component({
    selector: 'viewaccept-component',
    templateUrl: '../../../templates/admin/viewAcceptQuote/viewAccept/index.html',
})
class ViewAcceptComponent implements OnInit {

    private route: Router = inject(Router);
    constructor() { }

    ngOnInit(): void {

    }

    confirmDelete = false
}