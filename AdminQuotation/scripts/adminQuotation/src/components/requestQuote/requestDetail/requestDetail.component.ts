import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { ValidationService } from "../../../services/validation.service";
import { AcceptDetailService } from "../../../services/acceptDetail.service";
import { ResponseQuoteVM } from "../../responseQuote/quoteDetail/responseQuoteVM";


@Component({
    selector: "detailrequest-component",
    templateUrl: '../../../templates/admin/requestQuote/requestDetail/index.html'
})

export class RequestDetailComponent implements OnInit {

    private validator: ValidationService = inject(ValidationService);
    private detailService: AcceptDetailService = inject(AcceptDetailService);

    constructor(
    ) { }

    mockData: ResponseQuoteVM = new ResponseQuoteVM();

    ngOnInit(): void {
        this.mockData = this.detailService.getResponse();
    }


   

}
