import { LoadChildrenCallback } from '@angular/router';

export const lazyLoadPortfolioComponent: LoadChildrenCallback = async () => {

    const module = await import('../../portfolio/route/portfolio.module');

    const portfolioModule = module.PortfolioModule;

    return portfolioModule;

};
