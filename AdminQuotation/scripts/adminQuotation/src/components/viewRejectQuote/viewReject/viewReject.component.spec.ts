import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ViewRejectComponent } from './viewReject.component';

describe('SetupColorComponent', () => {
    let component: ViewRejectComponent;
    let fixture: ComponentFixture<ViewRejectComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ViewRejectComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(ViewRejectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("Variable should be false ", () => {

        var component = fixture.componentInstance;
        expect(component.confirmDelete).toBeFalse()
    })

    it("Label type should be show error emty .", () => {

        let component = fixture.componentInstance;
        let Header: HTMLElement = fixture.elementRef.nativeElement.querySelector('.head');
        fixture.detectChanges()

        expect(Header.innerHTML.trim()).toBe("View Reject Quote List");
    })


});
