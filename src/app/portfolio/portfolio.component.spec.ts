import { PortfolioComponent } from "./portfolio.component";

import { Title } from '@angular/platform-browser';

describe('Portfolio Component', () => {

  let portfolioComponent: PortfolioComponent, titleService: Title;

  beforeEach(() => portfolioComponent = new PortfolioComponent(titleService));

  it('Should exist', () => expect(PortfolioComponent).toBeDefined());

  it('Should be built with one argument; Title type', () => expect(portfolioComponent instanceof PortfolioComponent).toBeTruthy());

});
