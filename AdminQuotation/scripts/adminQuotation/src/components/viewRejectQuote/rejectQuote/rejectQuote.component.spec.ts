import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RejectQuoteComponent } from './rejectQuote.component';

describe('FormSizeComponent', () => {
    let component: RejectQuoteComponent;
    let fixture: ComponentFixture<RejectQuoteComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RejectQuoteComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(RejectQuoteComponent);
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
