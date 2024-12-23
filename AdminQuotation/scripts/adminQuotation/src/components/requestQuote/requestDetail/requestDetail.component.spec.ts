//import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { By } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';
//import { ToastrModule } from 'ngx-toastr';

//describe('ForSetupNameComponent', () => {

//    let component: emNamSetupComponent;
//    let fixture: ComponentFixture<emNamSetupComponent>;

//    beforeEach(() => {
//        TestBed.configureTestingModule({
//            declarations: [emNamSetupComponent],
//            imports: [
//                FormsModule,
//                ReactiveFormsModule,
//                HttpClientModule,
//                ToastrModule.forRoot(),
//            ],
//            schemas: [CUSTOM_ELEMENTS_SCHEMA]
//        });
//        fixture = TestBed.createComponent(emNamSetupComponent);
//        component = fixture.componentInstance;
//        fixture.detectChanges();
//    });

//    it('should create', () => {
//        expect(component).toBeTruthy();
//    });

//    it("Variable should be", () => {
//        let component = fixture.componentInstance;
//        fixture.detectChanges();

//        expect(component.isEdit).toBeTrue();

//    })

//    it("Save should be call", () => {
//        let component = fixture.componentInstance;
//        component.isEdit = false
//        fixture.detectChanges()

//        var btn = fixture.debugElement.query(By.css('.save'));
//        var Save = spyOn(component, "Save");
//        btn.triggerEventHandler('click', {})

//        expect(Save).toHaveBeenCalled();
//    })

//    it("Savechange should be call", () => {
//        let component = fixture.componentInstance;
//        fixture.detectChanges()

//        var btn = fixture.debugElement.query(By.css('.chang'));
//        var Save = spyOn(component, "SaveChange");
//        btn.triggerEventHandler('click', {})

//        expect(Save).toHaveBeenCalled();
//    })

//    it("cancel form should be call", () => {
//        let component = fixture.componentInstance;
//        fixture.detectChanges()

//        var btn = fixture.debugElement.query(By.css('.cancel'));
//        var cancel = spyOn(component, "Cancel");
//        btn.triggerEventHandler('click', {})

//        expect(cancel).toHaveBeenCalled();
//    })

//    it("Value should be valid", () => {

//        let component = fixture.componentInstance;

//        component.values.name = 'VIP';
//        component.values.phone = '0123456789';
//        component.values.email = 'abc@gmail.com';
//        component.values.address = 'USA';

//        fixture.detectChanges()

//        expect(component.values.isValid()).toBeTrue();
//        expect(component.Validator()).toBeTrue();
//    })

//    it("Value should be emty name", () => {

//        let component = fixture.componentInstance;

//        component.values.name = '';
//        component.values.phone = '0123456789';
//        component.values.email = 'abc@gmail.com';
//        component.values.address = 'USA';

//        fixture.detectChanges()

//        expect(component.values.isValid()).toBeFalse();
//        expect(component.Validator()).toBeFalse();
//    })

//    it("Value should be emty phone", () => {

//        let component = fixture.componentInstance;

//        component.values.name = 'name';
//        component.values.phone = '';
//        component.values.email = 'abc@gmail.com';
//        component.values.address = 'USA';

//        fixture.detectChanges()

//        expect(component.values.isValid()).toBeFalse();
//        expect(component.Validator()).toBeFalse();
//    })

//    it("Value should be emty email", () => {

//        let component = fixture.componentInstance;

//        component.values.name = 'name';
//        component.values.phone = '0123456789';
//        component.values.email = '';
//        component.values.address = 'USA';

//        fixture.detectChanges()

//        expect(component.values.isValid()).toBeFalse();
//        expect(component.Validator()).toBeFalse();
//    })

//    it("Value should be emty email", () => {

//        let component = fixture.componentInstance;

//        component.values.name = 'name';
//        component.values.phone = '0123456789';
//        component.values.email = 'abc@gmail.com';
//        component.values.address = '';

//        fixture.detectChanges()

//        expect(component.values.isValid()).toBeFalse();
//        expect(component.Validator()).toBeFalse();
//    })

//    it('Label should be not error', () => {
//        let component = fixture.componentInstance;

//        let TextName: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-name');
//        let TextPhone: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-phone');
//        let TextEmail: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-email');
//        let TextAddress: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-address');
//        fixture.detectChanges();

//        expect(TextName.innerHTML.trim()).toBe('no message');
//        expect(TextPhone.innerHTML.trim()).toBe('no message');
//        expect(TextEmail.innerHTML.trim()).toBe('no message');
//        expect(TextAddress.innerHTML.trim()).toBe('no message');

//    })

//    it("Label type should be show error emty .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.name = '';
//        component.values.phone = '0123456789';
//        component.values.email = 'abc@gmail.com';
//        component.values.address = 'USA';

//        fixture.detectChanges()
//        let TextName: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-name');
//        var btn = fixture.debugElement.query(By.css('.save'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextName.innerHTML.trim()).toBe("Name is required !");
//    })

//    it("Label type should be show error emty .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.name = 'name';
//        component.values.phone = '';
//        component.values.email = 'abc@gmail.com';
//        component.values.address = 'USA';

//        fixture.detectChanges()
//        let TextPhone: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-phone');
//        var btn = fixture.debugElement.query(By.css('.save'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextPhone.innerHTML.trim()).toBe("Phone number is required !");
//    })

//    it("Label type should be show error emty .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.name = 'name';
//        component.values.phone = '0123456789';
//        component.values.email = '';
//        component.values.address = 'USA';

//        fixture.detectChanges()
//        let TextEmail: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-email');
//        var btn = fixture.debugElement.query(By.css('.save'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextEmail.innerHTML.trim()).toBe("Email is required !");
//    })

//    it("Label type should be show error emty .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.name = 'name';
//        component.values.phone = '0123456789';
//        component.values.email = 'abc@gmail.com';
//        component.values.address = '';

//        fixture.detectChanges()
//        let TextAddress: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-address');
//        var btn = fixture.debugElement.query(By.css('.save'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextAddress.innerHTML.trim()).toBe("Address is required  !");
//    })

//    it("Label type should be show error invalid name .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.name = 'name@#$$';
//        component.values.phone = '0123456789';
//        component.values.email = 'abc@gmail.com';
//        component.values.address = 'USA';

//        fixture.detectChanges()
//        let TextName: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-name');
//        var btn = fixture.debugElement.query(By.css('.save'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextName.innerHTML.trim()).toBe("Invalid name !");
//    })

//    it("Label type should be show error invalid phone .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.name = 'name';
//        component.values.phone = '01234sdfs56789';
//        component.values.email = 'abc@gmail.com';
//        component.values.address = 'USA';

//        fixture.detectChanges()
//        let TextPhone: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-phone');
//        var btn = fixture.debugElement.query(By.css('.save'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextPhone.innerHTML.trim()).toBe("Invalid phone number !");
//    })

//    it("Label type should be show error invalid email .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.name = 'name';
//        component.values.phone = '0123456789';
//        component.values.email = 'abcgmailcom';
//        component.values.address = 'USA';

//        fixture.detectChanges()
//        let TextEmail: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-email');
//        var btn = fixture.debugElement.query(By.css('.save'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextEmail.innerHTML.trim()).toBe("Invalid email !");
//    })

//    it("Label type should be show error invalid email .", () => {

//        let component = fixture.componentInstance;
//        component.isEdit = false;

//        component.values.name = 'name';
//        component.values.phone = '0123456789';
//        component.values.email = 'abc@gmail.com';
//        component.values.address = 'US#$@#A';

//        fixture.detectChanges()
//        let TextAddress: HTMLElement = fixture.elementRef.nativeElement.querySelector('.label-address');
//        var btn = fixture.debugElement.query(By.css('.save'));
//        btn.triggerEventHandler("click", {})
//        fixture.detectChanges()

//        expect(TextAddress.innerHTML.trim()).toBe("Invalid address !");
//    })
//});
