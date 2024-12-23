import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { ValidationService } from "../../../services/validation.service";
import { RequestListVM } from "./requestListVM";
import { RequestQuoteListService } from "../../../services/requestQuoteList.service";

@Component({
    selector: "colorform-component",
    templateUrl: '../../../templates/admin/requestList/requestList/index.html'
})

export class RequestListComponent implements OnInit {

    private validator: ValidationService = inject(ValidationService);
    private requestService: RequestQuoteListService = inject(RequestQuoteListService);

    constructor(
    ) { }

    mockData: Array<RequestListVM> = []

    startDate: Date = new Date();
    endDate: Date = new Date();

    start: Date
    end: Date

    ngOnInit(): void {
        this.mockData = this.requestService.getQuote();
    }

    searchByDate() {
        this.start = this.startDate;
        this.end = this.endDate;

        console.log(this.start)
        console.log(this.end)
    }

    isShow = false
    showQuote() {
        this.isShow = true
    }

    closeQuote() {
        this.isShow = false
    }

}
