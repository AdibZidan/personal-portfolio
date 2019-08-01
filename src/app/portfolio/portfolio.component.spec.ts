import { PortfolioComponent } from "./portfolio.component";

import { Title } from '@angular/platform-browser';

describe('Portfolio Component', () => {

  it('Should exist', () => expect(PortfolioComponent).toBeDefined());

  it('Should be built with one argument; Title type', () => {

    let titleService: Title;

    const portfolioComponent = new PortfolioComponent(titleService);

    expect(portfolioComponent instanceof PortfolioComponent).toBeTruthy();

  });

});
