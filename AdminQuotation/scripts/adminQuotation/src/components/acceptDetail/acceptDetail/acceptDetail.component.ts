import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { AcceptDetailVM } from "../detail/acceptdetailVM";

export @Component({
    selector: 'acceptDtail-component',
    templateUrl: '../../../templates/admin/acceptDetail/acceptDetail/index.html',
})
class AcceptDetailComponent implements OnInit {

    private route: Router = inject(Router);

    constructor() { }

    ngOnInit(): void {

    }
    
}