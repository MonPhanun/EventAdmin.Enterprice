import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { ValidationService } from "../../../services/validation.service";
import { RequestQuoteVM, Item, Image } from "./requestQuoteVM";
import { RequestQuoteService } from "../../../services/requestQuote.Service";

@Component({
    selector: "frequest-component",
    templateUrl: '../../../templates/admin/requestQuote/formRequest/index.html'
})

export class FormQuoteComponent implements OnInit {

    private validator: ValidationService = inject(ValidationService);
    private requestService: RequestQuoteService = inject(RequestQuoteService);

    constructor(
    ) { }

    ngOnInit(): void {
        this.mockItem = this.requestService.getItem();
    }

    oldValue: RequestQuoteVM = new RequestQuoteVM()
    values: RequestQuoteVM = new RequestQuoteVM()

    oldItem: Item = new Item()
    Item: Item = new Item();

    mockItem: Array<Image> = []
    mockImage: Array<string> = []

    errMsItem = '';
    errMsDFS = '';
    isEditItem = false

    search: string = ''

    @Output("onSave")
    onSave: EventEmitter<RequestQuoteVM> = new EventEmitter<RequestQuoteVM>()

    @Output("detail")
    onDetail: EventEmitter<boolean> = new EventEmitter<boolean>()

    @Output("preview")
    onPreview: EventEmitter<RequestQuoteVM> = new EventEmitter<RequestQuoteVM>()

    detail() {

        if (this.Validator() && this.values.isValid()) {
            this.onPreview.emit(this.values)
            this.onDetail.emit(true);
        } else {
            // this.toast.error('Invalid input !', 'Error', { closeButton: true, });
        }

    }

    Save() {
        if (this.Validator() && this.values.isValid()) {
            this.onSave.emit(this.values);
            console.log(this.values);
        } else {
            // this.toast.error('Invalid input !', 'Error', { closeButton: true, });
        }
    }

    editItem() {

        if (this.oldItem.isValid()) {
            var value = new Item();
            value.copy(this.Item)
            this.values.item = this.values.item.map(e => e == this.oldItem ? value : e);
        }
        this.clear();
        this.isEditItem = false
    }

    getValEdit(value: Item) {
        this.oldItem = value;
        var val = new Item();
        val.copy(value);
        this.Item.copy(val);
        this.isEditItem = true
    }

    addItem() {
       // this.Item.image = this.imgSeleted;
        if (this.Item.isValid()) {

            var value = new Item();
            value.copy(this.Item)
            value.total = value.price * parseInt(value.quantity);
            this.values.item.push(value);

            this.imgSeleted = '';

        }
        this.clear();
    }

    clear() {
        //this.Item.image = '';
        this.Item.item = '';
        this.Item.quantity = '';
    }

    deleteItem(item: Item) {
        if (item.isValid()) {
            this.values.item = this.values.item.filter(e => e != item)
        }
    }

    trigerImage(data: any) {
        this.mockItem.map(e => {
            if (e.color.trim() == data.target.value.trim()) {
                this.mockImage = e.image;
                this.Item.image = e.image;
                this.Item.price = e.price
            }
        })

    }

    imgSeleted: string = '';
    selectImg(url: string) {
        var oldItem = new String();
        oldItem = url;
        this.imgSeleted = oldItem.toString();
    }

    errMsName = '';
    errMsPhone = '';
    errMsEmail = '';
    errMsAddress = '';

    Validator() {

        this.errMsName = this.validator.ValidateStringNumberLength(this.values.name,30, "Name is required !", "Invalid name !","Name is too long !");
        this.errMsPhone = this.validator.ValidatePhone(this.values.phone,18, "Phone number is required !", "Invalid phone number !");
        this.errMsEmail = this.validator.ValidateEmail(this.values.email,30, "Email is required !", "Invalid email !");
        this.errMsAddress = this.validator.ValidateStringNumber(this.values.address, "Address is required  !", "Invalid address !");

        this.errMsDFS = this.validator.ValidateDateTimeEmty(this.values.DFS, "Date of service is required !");
        if (this.values.item.length == 0) {
            this.errMsItem = "Item is required !"
        } else {
            this.errMsItem = "";
        }
            
        return this.errMsItem == '' &&  this.errMsDFS == '' && this.errMsName == '' && this.errMsPhone == '' && this.errMsEmail == '' && this.errMsAddress == '';

    }



    

    //Validator() {

    
    //}

}
