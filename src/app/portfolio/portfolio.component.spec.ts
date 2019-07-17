import { PortfolioComponent } from "./portfolio.component";

describe('Portfolio Component', () => {

  it('Should exist', () => { expect(PortfolioComponent).toBeDefined(); })

  it('Should be built with zero arguments', () => {

    const portfolioComponent = new PortfolioComponent();

    expect(portfolioComponent instanceof PortfolioComponent).toBe(true);

  });

});
