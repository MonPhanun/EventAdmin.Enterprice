import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RequestQuoteComponent } from './requestQuote.component';


describe('RequestQuoteComponent', () => {
    let component: RequestQuoteComponent;
    let fixture: ComponentFixture<RequestQuoteComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RequestQuoteComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(RequestQuoteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("onSave should be call ", () => {
        var component = fixture.componentInstance;
        var onSave = spyOn(component, "onSave");
        var event
        component.onSave(event);
        fixture.detectChanges()

        expect(onSave).toHaveBeenCalled();
    })

    it("Detail should be call", () => {
        var component = fixture.componentInstance;
        var onEdit = spyOn(component, "onDetail");
        var event
        component.onDetail(event)
        fixture.detectChanges()

        expect(onEdit).toHaveBeenCalled();

    })

    it("Priview should be call ", () => {
        var component = fixture.componentInstance;
        var cancel = spyOn(component, "onPreview");
        var event
        component.onPreview(event);
        fixture.detectChanges()

        expect(cancel).toHaveBeenCalled();

    })

});
