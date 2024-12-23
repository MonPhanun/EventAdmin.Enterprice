import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ViewAcceptComponent } from './viewAccept.component';

describe('ViewAcceptComponent', () => {
    let component: ViewAcceptComponent;
    let fixture: ComponentFixture<ViewAcceptComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ViewAcceptComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(ViewAcceptComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("onSave should be call ", () => {

        var component = fixture.componentInstance;
        expect(component.confirmDelete).toBeFalse()
    })

    it("Label type should be show error emty .", () => {

        let component = fixture.componentInstance;
        let Header: HTMLElement = fixture.elementRef.nativeElement.querySelector('.head');
        fixture.detectChanges()

        expect(Header.innerHTML.trim()).toBe("View Accept Quote List");
    })

});
