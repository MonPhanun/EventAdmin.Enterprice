import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AcceptQuoteComponent } from './accptQuote.component';

describe('AcceptQuoteComponent', () => {
    let component: AcceptQuoteComponent;
    let fixture: ComponentFixture<AcceptQuoteComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AcceptQuoteComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                ToastrModule.forRoot(),
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(AcceptQuoteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("Variable should be", () => {
        let component = fixture.componentInstance;
        fixture.detectChanges();

        expect(component.isShow).toBeFalse();

    })

    it("Save should be call", () => {
        let component = fixture.componentInstance;

        var btn = fixture.debugElement.query(By.css('.search'));
        var Search = spyOn(component, "searchByDate");
        btn.triggerEventHandler('click', {})
        fixture.detectChanges()

        expect(Search).toHaveBeenCalled();
    })

    it("Mock Date should be", () => {
        let component = fixture.componentInstance;
        fixture.detectChanges();

        expect(component.mockData.length).toBeGreaterThan(0);

    })
});
