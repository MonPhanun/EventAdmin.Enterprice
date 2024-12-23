import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RejectDetailComponent } from './rejectDetail.component';

describe('SetupNameComponent', () => {
    let component: RejectDetailComponent;
    let fixture: ComponentFixture<RejectDetailComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RejectDetailComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(RejectDetailComponent);
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

        expect(Header.innerHTML.trim()).toBe("View Reject Detail");
    })
});
