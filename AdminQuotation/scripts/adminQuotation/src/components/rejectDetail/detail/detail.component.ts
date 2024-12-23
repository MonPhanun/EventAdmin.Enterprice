import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { ValidationService } from "../../../services/validation.service";
import { AcceptDetailService } from "../../../services/acceptDetail.service";
import { RejectDetailVM } from "./rejectDetailVM";

@Component({
    selector: "rjdetail-component",
    templateUrl: '../../../templates/admin/rejectDetail/detail/index.html'
})

export class RJDetailComponent implements OnInit {

    private validator: ValidationService = inject(ValidationService);
    private detailService: AcceptDetailService = inject(AcceptDetailService);

    constructor(
    ) { }

    mockData: RejectDetailVM = new RejectDetailVM();

    ngOnInit(): void {
        this.mockData = this.detailService.getResponse();

    }

}
