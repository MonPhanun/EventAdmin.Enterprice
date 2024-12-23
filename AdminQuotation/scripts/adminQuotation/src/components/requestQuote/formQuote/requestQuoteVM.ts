
export class RequestQuoteVM {
    name: string = '';
    phone: string = '';
    email: string = '';
    address: string = '';
    DFS: Date = null;
    item: Array<Item> = [];

    isValid() {
        return this.DFS != null &&
            this.item.length != 0;
    }

    copy(value: RequestQuoteVM) {
        this.DFS = value.DFS;
        this.item = value.item;
    }
}

export class Item {
    item: string = "";
    image: Array<string> = [];
    size: string = "";
    color: string = "";
    quantity: string = "";
    price: number;
    total: number;

    isValid() {
        return this.item != "" &&
            this.color != "" &&
            this.size != "" &&
            this.quantity != "";
    }

    copy(value: Item) {
        this.item = value.item;
        this.size = value.size;
        this.color = value.color;
        this.image = value.image;
        this.quantity = value.quantity;
        this.price = value.price;
    }

}

export class Image {
    item: string = "";
    size: string = "";
    color: string = "";
    price: number;
    total: number;
    image: Array<string> = []

}