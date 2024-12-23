import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RequestListComponent } from './requestList.component';

describe('RequestListComponent', () => {
    let component: RequestListComponent;
    let fixture: ComponentFixture<RequestListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RequestListComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(RequestListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("Variable should be", () => {
        let component = fixture.componentInstance;
        fixture.detectChanges();

        expect(component.mockData.length).toBeGreaterThan(0);

    })

    it("Search should be call", () => {
        let component = fixture.componentInstance;
       
        var btn = fixture.debugElement.query(By.css('.search'));
        var Save = spyOn(component, "searchByDate");
        btn.triggerEventHandler('click', {})

        fixture.detectChanges()

        expect(Save).toHaveBeenCalled();
    })

});
