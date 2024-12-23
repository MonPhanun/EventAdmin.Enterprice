import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { ValidationService } from "../../../services/validation.service";
import { AcceptQuoteVM } from "./accptQuoteVM";
import { AcceptQuoteListService } from "../../../services/acceptQuoteList.service";

@Component({
    selector: "accept-component",
    templateUrl: '../../../templates/admin/viewAcceptQuote/acceptQuote/index.html'
})

export class AcceptQuoteComponent implements OnInit {

    private validator: ValidationService = inject(ValidationService);
    private acceptService: AcceptQuoteListService = inject(AcceptQuoteListService);

    constructor(
    ) { }

    mockData: Array<AcceptQuoteVM> = []

    startDate: Date = new Date();
    endDate: Date = new Date();

    start: Date
    end: Date

    ngOnInit(): void {
        this.mockData = this.acceptService.getQuote();
    }

    isShow = false
    showQuote() {
        this.isShow = true
    }

    closeQuote() {
        this.isShow = false
    }

    searchByDate() {
        this.start = this.startDate;
        this.end = this.endDate;

        console.log(this.start)
        console.log(this.end)
    }



}
