import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { RequestListVM } from "../requestList/requestListVM";


export @Component({
    selector: 'color-component',
    templateUrl: '../../../templates/admin/requestList/tableList/index.html',
})
class TableListComponent implements OnInit {

    private route: Router = inject(Router);
    constructor() { }

    ngOnInit(): void {

    }

    confirmDelete = false
}