import { Injectable } from "@angular/core";
import { RequestListVM } from "../components/requestList/requestList/requestListVM";

@Injectable({ providedIn: 'root' })
export class RequestQuoteListService {

    storeRequest: Array<RequestListVM> = []

    mockQuote() {
        var mock = new Array<RequestListVM>();
        mock.push({ quote: "Quote 1", name: "Noro dom", date: new Date('11-22-2024'), status: 'False' } as RequestListVM)
        mock.push({ quote: "Quote 1", name: "Darak Nin", date: new Date('10-19-2024'), status: 'False' } as RequestListVM)
        mock.push({ quote: "Quote 1", name: "Vearak chhun", date: new Date('7-13-2024'), status: 'False' } as RequestListVM)
        mock.push({ quote: "Quote 1", name: "Danut Leak", date: new Date('9-9-2024'), status: 'False' } as RequestListVM)

        return mock;
    }

    getQuote() {
        this.storeRequest = this.mockQuote();
        return this.storeRequest;
    }

    createEmbellName(data: RequestListVM) {
        if (data.isValid()) {
            this.storeRequest.push(data)
        }
    }

    editEmbell(data: RequestListVM[]) {
        if (data.length > 0) {
            this.storeRequest = this.storeRequest.map(e => e == data[0] ? data[1] : e);
        }
    }

    deleteEmbell(data: RequestListVM) {
        if (data.isValid()) {
            this.storeRequest = this.storeRequest.filter(e => e !=data)
        }
    }
}