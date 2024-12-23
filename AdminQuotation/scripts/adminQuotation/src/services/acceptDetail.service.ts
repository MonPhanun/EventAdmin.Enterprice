import { Injectable } from "@angular/core";
import { AcceptDetailVM } from "../components/acceptDetail/detail/acceptdetailVM";


@Injectable({ providedIn: 'root' })
export class AcceptDetailService {

    storeSize: Array<AcceptDetailVM> = []

    mockClothSize() {
        var mock = new AcceptDetailVM();
        mock = {
            firstName: "Vann", lastName: "Dara", email: 'dara23@gmail.com',
            phone: '0961234567', dateOfService: new Date("10-23-2024"), quoteName: "Quote 1",
            date: new Date("9-23-2024"), expiredDate: new Date("9-31-2024"),
            quotation: [{ product: 'Product 1', description: ' ', price: 100, qty: 2, total: 200 },
            { product: 'Product 2', description: ' ', price: 200, qty: 1, total: 200 },
            { product: 'Product 3', description: ' ', price: 300, qty: 3, total: 900 }]
        }
        return mock;
    }

    getResponse() {
        return this.mockClothSize();
    }
}