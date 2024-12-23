import { Injectable } from "@angular/core";
import { AcceptQuoteVM } from "../components/viewAcceptQuote/acceptQuote/accptQuoteVM";

@Injectable({ providedIn: 'root' })
export class AcceptQuoteListService {

    storeAccept: Array<AcceptQuoteVM> = []

    mockQuote() {
        var mock = new Array<AcceptQuoteVM>();
        mock.push({ quote: "Quote 1", name: "Noro dom", date: new Date('11-22-2024'), status: 'False' } as AcceptQuoteVM)
        mock.push({ quote: "Quote 1", name: "Darak Nin", date: new Date('10-19-2024'), status: 'False' } as AcceptQuoteVM)
        mock.push({ quote: "Quote 1", name: "Vearak chhun", date: new Date('7-13-2024'), status: 'False' } as AcceptQuoteVM)
        mock.push({ quote: "Quote 1", name: "Danut Leak", date: new Date('9-9-2024'), status: 'False' } as AcceptQuoteVM)

        return mock;
    }

    getQuote() {
        this.storeAccept = this.mockQuote();
        return this.storeAccept;
    }

    createEmbellName(data: AcceptQuoteVM) {
        if (data.isValid()) {
            this.storeAccept.push(data)
        }
    }

    editEmbell(data: AcceptQuoteVM[]) {
        if (data.length > 0) {
            this.storeAccept = this.storeAccept.map(e => e == data[0] ? data[1] : e);
        }
    }

    deleteEmbell(data: AcceptQuoteVM) {
        if (data.isValid()) {
            this.storeAccept = this.storeAccept.filter(e => e != data)
        }
    }
}