import { Injectable } from "@angular/core";
import { RequestQuoteVM, Image } from "../components/requestQuote/formQuote/requestQuoteVM";



@Injectable({ providedIn: 'root' })
export class RequestQuoteService {

    storeItem: Array<Image> = [];
    storeQuote: Array<RequestQuoteVM> = [];

    mockItem() {
        var mock = new Array<Image>();
        mock = [
            { item: "product 1", size: "XL", color: "Yellow", price: 200, image: ["https://i.pinimg.com/236x/48/f7/2c/48f72c60c75150816bd1cfd82aa9d1c0.jpg", "https://i.pinimg.com/236x/7b/43/12/7b4312df51518746d15be1e50ad1447f.jpg", "https://i.pinimg.com/236x/24/2d/b6/242db63f5d3d8a231c204dc7a0dd5ed2.jpg"] } as Image,
            { item: "product 2", size: "L", color: "Red", price: 400, image: ["https://i.pinimg.com/236x/de/3a/a0/de3aa0f6fc8ed62071e7b9d607fa6749.jpg", "https://i.pinimg.com/236x/c4/36/7e/c4367e905217c4f24c04f39ea6b76a7b.jpg", "https://i.pinimg.com/236x/4e/73/a2/4e73a2873966cba446476a69fcb1855d.jpg"] } as Image,
            { item: "product 3", size: "Sm", color: "Green", price: 300, image: ["https://i.pinimg.com/236x/73/d5/f4/73d5f484c75bba5a7a3614603aa7d5ed.jpg", "https://i.pinimg.com/474x/18/51/38/1851386787533da93c52077f2cf97421.jpg", "https://i.pinimg.com/236x/8f/21/49/8f2149635a21c4808fa97b078d5fc460.jpg"] } as Image
        ];

        return mock;
    }

    getItem() {
        this.storeItem = this.mockItem();
        return this.storeItem;
    }

    createDressing(data: RequestQuoteVM) {
        if (data.isValid()) {
            this.storeQuote.push(data);
        }
    }

    editDressing(data: RequestQuoteVM[]) {
        if (data.length > 0) {
            this.storeQuote = this.storeQuote.map(e => e == data[0] ? data[1] : e);
        }
    }

    deleteDressing(data: RequestQuoteVM) {
        if (data.isValid()) {
            this.storeQuote = this.storeQuote.filter(e => e != data);
        }
    }
}
