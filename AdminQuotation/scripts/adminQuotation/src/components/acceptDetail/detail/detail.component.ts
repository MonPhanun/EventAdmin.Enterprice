import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { ValidationService } from "../../../services/validation.service";
import { AcceptDetailVM } from "./acceptdetailVM";
import { AcceptDetailService } from "../../../services/acceptDetail.service";

@Component({
    selector: "acdetail-component",
    templateUrl: '../../../templates/admin/acceptDetail/detail/index.html'
})

export class DetailComponent implements OnInit {

    private validator: ValidationService = inject(ValidationService);
    private detailService: AcceptDetailService = inject(AcceptDetailService);

    constructor(
    ) { }

    mockData: AcceptDetailVM = new AcceptDetailVM();

    ngOnInit(): void {
        this.mockData = this.detailService.getResponse();

    }

}
