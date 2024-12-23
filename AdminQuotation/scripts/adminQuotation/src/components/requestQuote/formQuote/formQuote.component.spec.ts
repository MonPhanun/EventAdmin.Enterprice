import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormQuoteComponent } from './formQuote.component';
import { Item } from './requestQuoteVM';

describe('ForSetupNameComponent', () => {

    let component: FormQuoteComponent;
    let fixture: ComponentFixture<FormQuoteComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FormQuoteComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(FormQuoteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("Variable should be", () => {
        let component = fixture.componentInstance;
        fixture.detectChanges();

        expect(component.isEditItem).toBeFalse();

    })

    it("Save should be call", () => {
        let component = fixture.componentInstance;

        var btn = fixture.debugElement.query(By.css('.save'));
        var Save = spyOn(component, "Save");
        btn.triggerEventHandler('click', {})
        fixture.detectChanges()

        expect(Save).toHaveBeenCalled();
    })

    it("Preview should be call", () => {
        let component = fixture.componentInstance;

        var btn = fixture.debugElement.query(By.css('.detail'));
        var detail = spyOn(component, "detail");
        btn.triggerEventHandler('click', {})
        fixture.detectChanges()

        expect(detail).toHaveBeenCalled();
    })

    it("Add item form should be call", () => {
        let component = fixture.componentInstance;

        var btn = fixture.debugElement.query(By.css('.additem'));
        var addItem = spyOn(component, "addItem");
        btn.triggerEventHandler('click', {})
        fixture.detectChanges()

        expect(addItem).toHaveBeenCalled();
    })

    it("Value should be valid", () => {

        let component = fixture.componentInstance;

        component.values.name = 'VIP';
        component.values.phone = '0123456789';
        component.values.email = 'abc@gmail.com';
        component.values.address = 'USA';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = [{ item: 'name', color: 'color', size: "XL", image: ['img'], quantity: '2', price: 2, total: 23 } as Item]

        fixture.detectChanges()

        expect(component.values.isValid()).toBeTrue();
        expect(component.Validator()).toBeTrue();
    })

    it("Value should be invalid name ", () => {

        let component = fixture.componentInstance;

        component.values.name = '';
        component.values.phone = '0123456789';
        component.values.email = 'abc@gmail.com';
        component.values.address = 'USA';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = [{ item: 'name', color: 'color', size: "XL", image: ['img'], quantity: '2', price: 2, total: 23 } as Item]

        fixture.detectChanges()


        expect(component.Validator()).toBeFalse();
    })

    it("Value should be invalid phone ", () => {

        let component = fixture.componentInstance;

        component.values.name = 'name';
        component.values.phone = '';
        component.values.email = 'abc@gmail.com';
        component.values.address = 'USA';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = [{ item: 'name', color: 'color', size: "XL", image: ['img'], quantity: '2', price: 2, total: 23 } as Item]

        fixture.detectChanges()

        expect(component.Validator()).toBeFalse();
    })

    it("Value should be invalid email ", () => {

        let component = fixture.componentInstance;

        component.values.name = 'name';
        component.values.phone = '0123456789';
        component.values.email = '';
        component.values.address = 'USA';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = [{ item: 'name', color: 'color', size: "XL", image: ['img'], quantity: '2', price: 2, total: 23 } as Item]

        fixture.detectChanges()


        expect(component.Validator()).toBeFalse();
    })

    it("Value should be invalid address ", () => {

        let component = fixture.componentInstance;

        component.values.name = 'name';
        component.values.phone = '0123456789';
        component.values.email = 'abc@gmail.com';
        component.values.address = '';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = [{ item: 'name', color: 'color', size: "XL", image: ['img'], quantity: '2', price: 2, total: 23 } as Item]

        fixture.detectChanges()

        expect(component.Validator()).toBeFalse();
    })

    it("Value should be invalid item ", () => {

        let component = fixture.componentInstance;

        component.values.name = 'name';
        component.values.phone = '0123456789';
        component.values.email = 'abc@gmail.com';
        component.values.address = 'USA';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = []

        fixture.detectChanges()

        expect(component.Validator()).toBeFalse();
    })

    it('Label should be not error', () => {
        let component = fixture.componentInstance;

        let TextName: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-name');
        let TextPhone: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-phone');
        let TextEmail: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-email');
        let TextAddress: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-address');
        let TextDate: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-date');
        let TextProduct: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-product');
        let TextSize: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-size');
        fixture.detectChanges();

        expect(TextName.innerHTML.trim()).toBe('no message');
        expect(TextPhone.innerHTML.trim()).toBe('no message');
        expect(TextEmail.innerHTML.trim()).toBe('no message');
        expect(TextAddress.innerHTML.trim()).toBe('no message');
        expect(TextDate.innerHTML.trim()).toBe('no message');
        expect(TextProduct.innerHTML.trim()).toBe('no message');
        expect(TextSize.innerHTML.trim()).toBe('no message');
    })

    it("Label type should be show error emty .", () => {

        let component = fixture.componentInstance;

        component.values.name = '';
        component.values.phone = '0123456789';
        component.values.email = 'abc@gmail.com';
        component.values.address = 'Address';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = [{ item: 'name', color: 'color', size: "XL", image: ['img'], quantity: '2', price: 2, total: 23 } as Item]

        fixture.detectChanges()
        let TextName: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-name');
        var btn = fixture.debugElement.query(By.css('.save'));
        btn.triggerEventHandler("click", {})
        fixture.detectChanges()

        expect(TextName.innerHTML.trim()).toBe("Name is required !");
    })

    it("Label type should be show error emty .", () => {

        let component = fixture.componentInstance;

        component.values.name = 'name';
        component.values.phone = '';
        component.values.email = 'abc@gmail.com';
        component.values.address = 'Address';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = [{ item: 'name', color: 'color', size: "XL", image: ['img'], quantity: '2', price: 2, total: 23 } as Item]

        fixture.detectChanges()
        let TextPhone: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-phone');
        var btn = fixture.debugElement.query(By.css('.save'));
        btn.triggerEventHandler("click", {})
        fixture.detectChanges()

        expect(TextPhone.innerHTML.trim()).toBe("Phone number is required !");
    })

    it("Label type should be show error emty .", () => {

        let component = fixture.componentInstance;
        component.values.name = 'name';
        component.values.phone = '0123456789';
        component.values.email = '';
        component.values.address = 'Address';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = [{ item: 'name', color: 'color', size: "XL", image: ['img'], quantity: '2', price: 2, total: 23 } as Item]

        fixture.detectChanges()
        let TextEmail: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-email');
        var btn = fixture.debugElement.query(By.css('.save'));
        btn.triggerEventHandler("click", {})
        fixture.detectChanges()

        expect(TextEmail.innerHTML.trim()).toBe("Email is required !");
    })

    it("Label type should be show error emty .", () => {

        let component = fixture.componentInstance;
        component.values.name = 'name';
        component.values.phone = '0123456789';
        component.values.email = 'abc@gmail.com';
        component.values.address = '';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = [{ item: 'name', color: 'color', size: "XL", image: ['img'], quantity: '2', price: 2, total: 23 } as Item]

        fixture.detectChanges()
        let TextAddress: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-address');
        var btn = fixture.debugElement.query(By.css('.save'));
        btn.triggerEventHandler("click", {})
        fixture.detectChanges()

        expect(TextAddress.innerHTML.trim()).toBe("Address is required  !");
    })

    it("Label type should be show error invalid name .", () => {

        let component = fixture.componentInstance;
        component.values.name = 'name';
        component.values.phone = '0123456789';
        component.values.email = 'abc@gmail.com';
        component.values.address = 'address';
        //component.values.DFS = new Date("11-12-2024");
        component.values.item = [{ item: 'name', color: 'color', size: "XL", image: ['img'], quantity: '2', price: 2, total: 23 } as Item]

        fixture.detectChanges()
        let TextName: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-date');
        var btn = fixture.debugElement.query(By.css('.save'));
        btn.triggerEventHandler("click", {})
        fixture.detectChanges()

        expect(TextName.innerHTML.trim()).toBe("Date of service is required !");
    })

    it("Label type should be show error invalid phone .", () => {

        let component = fixture.componentInstance;
        component.values.name = 'name';
        component.values.phone = '0123456789';
        component.values.email = 'abc@gmail.com';
        component.values.address = 'address';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = []

        fixture.detectChanges()
        let TextProduct: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-product');
        var btn = fixture.debugElement.query(By.css('.save'));
        btn.triggerEventHandler("click", {})
        fixture.detectChanges()

        expect(TextProduct.innerHTML.trim()).toBe("Item is required !");
    })


    it("Label type should be show error invalid name .", () => {

        let component = fixture.componentInstance;
        component.values.name = 'name#$%';
        component.values.phone = '0123456789';
        component.values.email = 'abc@gmail.com';
        component.values.address = 'address';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = [{ item: 'name', color: 'color', size: "XL", image: ['img'], quantity: '2', price: 2, total: 23 } as Item]


        fixture.detectChanges()
        let Text: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-name');
        var btn = fixture.debugElement.query(By.css('.save'));
        btn.triggerEventHandler("click", {})
        fixture.detectChanges()

        expect(Text.innerHTML.trim()).toBe("Invalid name !");
    })

    it("Label type should be show error invalid phone .", () => {

        let component = fixture.componentInstance;
        component.values.name = 'name';
        component.values.phone = '012345sdf6789';
        component.values.email = 'abc@gmail.com';
        component.values.address = 'address';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = [{ item: 'name', color: 'color', size: "XL", image: ['img'], quantity: '2', price: 2, total: 23 } as Item]


        fixture.detectChanges()
        let Text: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-phone');
        var btn = fixture.debugElement.query(By.css('.save'));
        btn.triggerEventHandler("click", {})
        fixture.detectChanges()

        expect(Text.innerHTML.trim()).toBe("Invalid phone number !");
    })

    it("Label type should be show error invalid email .", () => {

        let component = fixture.componentInstance;
        component.values.name = 'name';
        component.values.phone = '012345sdf6789';
        component.values.email = 'abcgmailcom';
        component.values.address = 'address';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = [{ item: 'name', color: 'color', size: "XL", image: ['img'], quantity: '2', price: 2, total: 23 } as Item]


        fixture.detectChanges()
        let Text: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-email');
        var btn = fixture.debugElement.query(By.css('.save'));
        btn.triggerEventHandler("click", {})
        fixture.detectChanges()

        expect(Text.innerHTML.trim()).toBe("Invalid email !");
    })

    it("Label type should be show error invalid address .", () => {

        let component = fixture.componentInstance;
        component.values.name = 'name';
        component.values.phone = '012345sdf6789';
        component.values.email = 'abc@gmail.com';
        component.values.address = 'addres#$%s';
        component.values.DFS = new Date("11-12-2024");
        component.values.item = [{ item: 'name', color: 'color', size: "XL", image: ['img'], quantity: '2', price: 2, total: 23 } as Item]


        fixture.detectChanges()
        let Text: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-address');
        var btn = fixture.debugElement.query(By.css('.save'));
        btn.triggerEventHandler("click", {})
        fixture.detectChanges()

        expect(Text.innerHTML.trim()).toBe("Invalid address !");
    })

});
