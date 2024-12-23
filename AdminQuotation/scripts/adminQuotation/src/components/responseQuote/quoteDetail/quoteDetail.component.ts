import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { ValidationService } from "../../../services/validation.service";
import { ResponseQuoteVM } from "./responseQuoteVM";
import { AcceptDetailService } from "../../../services/acceptDetail.service";



@Component({
    selector: "qdetail-component",
    templateUrl: '../../../templates/admin/responseQuote/quoteDetail/index.html'
})

export class QuoteDetailComponent implements OnInit {

    private validator: ValidationService = inject(ValidationService);
    private detailService: AcceptDetailService = inject(AcceptDetailService);

    constructor(
    ) { }

    mockData: ResponseQuoteVM = new ResponseQuoteVM();

    ngOnInit(): void {
        this.mockData = this.detailService.getResponse();
    }

}
