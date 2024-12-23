import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { ValidationService } from "../../../services/validation.service";
import { RejectQuoteVM } from "./rejectQuoteVM";
import { AcceptQuoteListService } from "../../../services/acceptQuoteList.service";

@Component({
    selector: "reject-component",
    templateUrl: '../../../templates/admin/viewRejectQuote/rejectQuote/index.html'
})

export class RejectQuoteComponent implements OnInit {

    private validator: ValidationService = inject(ValidationService);
    private rejectService: AcceptQuoteListService = inject(AcceptQuoteListService);

    constructor(
    ) { }

    mockData: Array<RejectQuoteVM> = []

    startDate: Date = new Date();
    endDate: Date = new Date();

    start: Date
    end: Date

    ngOnInit(): void {
        this.mockData = this.rejectService.getQuote();
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
