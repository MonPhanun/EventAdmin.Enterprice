import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";



export @Component({
    selector: 'viewreject-component',
    templateUrl: '../../../templates/admin/viewRejectQuote/viewReject/index.html',
})
class ViewRejectComponent implements OnInit {

    private route: Router = inject(Router);
    constructor() { }

    ngOnInit(): void {

    }

    confirmDelete = false
}