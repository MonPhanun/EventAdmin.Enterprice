import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RJDetailComponent } from './detail.component';

describe('RJDetailComponent', () => {

    let component: RJDetailComponent;
    let fixture: ComponentFixture<RJDetailComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RJDetailComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(RJDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("Variable should be", () => {
        let component = fixture.componentInstance;
        fixture.detectChanges();

        expect(component.mockData).not.toBeNull();

    })

});

//function createMockImageFile(name: string, type: string): File {
//    const content = new Uint8Array([0x00, 0x01, 0x02, 0x03]); // Mock image content
//    const blob = new Blob([content], { type });
//    const file = new File([blob], name, { type });

//    return file;
//}
