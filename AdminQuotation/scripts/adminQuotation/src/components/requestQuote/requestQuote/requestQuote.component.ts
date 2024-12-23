import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { RequestQuoteVM } from "../formQuote/requestQuoteVM";


export @Component({
    selector: 'request-component',
    templateUrl: '../../../templates/admin/requestQuote/requestQuote/index.html',
})
class RequestQuoteComponent implements OnInit {
    private route: Router = inject(Router);
    constructor() { }

    ngOnInit(): void {

    }

    detail = false

    NameData: Array<RequestQuoteVM> = new Array<RequestQuoteVM>()
    previewData: RequestQuoteVM = new RequestQuoteVM();

    subTotal: number = 0;
    grandTotal: number = 0;

    onDetail(val: boolean) {
        this.detail = val;
    }
 

    onSave(data: RequestQuoteVM) {
        if (data.isValid()) {
     
        }
    }

    onPreview(val: RequestQuoteVM) {
        this.previewData = val;
        console.log(val);

        val.item.forEach(val => {
            this.subTotal += val.total;
        })

        if (this.subTotal != 0) {
            this.grandTotal = this.subTotal + (this.subTotal*10)/100
        }
    }

}