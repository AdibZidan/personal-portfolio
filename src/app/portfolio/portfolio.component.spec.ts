import { PortfolioComponent } from './portfolio.component';

import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

describe('Portfolio Component', () => {

    let portfolioComponent: PortfolioComponent,
        portfolioFixture: ComponentFixture<PortfolioComponent>,
        debugElement: DebugElement,
        htmlElement: HTMLElement;

    beforeAll(async(() => {

        TestBed.configureTestingModule({
            declarations: [PortfolioComponent]
        }).compileComponents();

        portfolioFixture = TestBed.createComponent(PortfolioComponent);

        portfolioComponent = portfolioFixture.componentInstance;

        debugElement = portfolioFixture.debugElement;

        htmlElement = debugElement.nativeElement;

        portfolioFixture.detectChanges();

    }));

    afterAll(async(() => TestBed.resetTestingModule()));

    it('Should exist/be defined', () => expect(portfolioComponent).toBeDefined());

    it('Should be built/compiled', () => expect(portfolioComponent instanceof PortfolioComponent).toBeTruthy());

});
