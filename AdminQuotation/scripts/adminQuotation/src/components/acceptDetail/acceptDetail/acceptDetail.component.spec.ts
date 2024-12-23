import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AcceptDetailComponent } from './acceptDetail.component';

describe('SetupNameComponent', () => {
    let component: AcceptDetailComponent;
    let fixture: ComponentFixture<AcceptDetailComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AcceptDetailComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(AcceptDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("Header should be show .", () => {

        let component = fixture.componentInstance;
        let Header: HTMLElement = fixture.elementRef.nativeElement.querySelector('.head');
        fixture.detectChanges()

        expect(Header.innerHTML.trim()).toBe("View Accept Detail");
    })

});
