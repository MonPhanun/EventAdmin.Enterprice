import { Injectable } from "@angular/core";
import { RejectQuoteVM } from "../components/viewRejectQuote/rejectQuote/rejectQuoteVM";


@Injectable({ providedIn: 'root' })
export class AcceptQuoteListService {

    storeReject: Array<RejectQuoteVM> = []

    mockQuote() {
        var mock = new Array<RejectQuoteVM>();
        mock.push({ quote: "Quote 1", name: "Noro dom", date: new Date('11-22-2024'), status: 'False' } as RejectQuoteVM)
        mock.push({ quote: "Quote 1", name: "Darak Nin", date: new Date('10-19-2024'), status: 'False' } as RejectQuoteVM)
        mock.push({ quote: "Quote 1", name: "Vearak chhun", date: new Date('7-13-2024'), status: 'False' } as RejectQuoteVM)
        mock.push({ quote: "Quote 1", name: "Danut Leak", date: new Date('9-9-2024'), status: 'False' } as RejectQuoteVM)

        return mock;
    }

    getQuote() {
        this.storeReject = this.mockQuote();
        return this.storeReject;
    }

    createEmbellName(data: RejectQuoteVM) {
        if (data.isValid()) {
            this.storeReject.push(data)
        }
    }

    editEmbell(data: RejectQuoteVM[]) {
        if (data.length > 0) {
            this.storeReject = this.storeReject.map(e => e == data[0] ? data[1] : e);
        }
    }

    deleteEmbell(data: RejectQuoteVM) {
        if (data.isValid()) {
            this.storeReject = this.storeReject.filter(e => e != data)
        }
    }
}