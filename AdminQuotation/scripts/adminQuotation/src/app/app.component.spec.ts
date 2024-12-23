﻿import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [
                AppComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents()
    })

    it('should Create the app', () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance
        expect(app).toBeTruthy();
    })
});