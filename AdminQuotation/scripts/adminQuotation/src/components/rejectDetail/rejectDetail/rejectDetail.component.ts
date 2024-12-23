import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { RejectDetailVM } from "../detail/rejectDetailVM";

export @Component({
    selector: 'rejectDtail-component',
    templateUrl: '../../../templates/admin/rejectDetail/rejectDetail/index.html',
})
class RejectDetailComponent implements OnInit {

    private route: Router = inject(Router);

    constructor() { }

    ngOnInit(): void {

    }
    
}