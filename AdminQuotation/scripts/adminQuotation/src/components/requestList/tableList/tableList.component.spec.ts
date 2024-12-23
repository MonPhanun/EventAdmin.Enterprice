import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TableListComponent } from './tableList.component';

describe('SetupColorComponent', () => {
    let component: TableListComponent;
    let fixture: ComponentFixture<TableListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TableListComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(TableListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it("Text header should be  .", () => {

        let component = fixture.componentInstance;

        let TextHeader: HTMLElement = fixture.elementRef.nativeElement.querySelector('.head');

        fixture.detectChanges()

        expect(TextHeader.innerHTML.trim()).toBe("Request Quote List");
    })     



});
