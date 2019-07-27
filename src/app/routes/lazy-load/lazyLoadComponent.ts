import { LoadChildrenCallback } from '@angular/router';

export const lazyLoadPortfolioComponent: LoadChildrenCallback = async () => {

    const module = await import('../../portfolio/route/portfolio.module');

    const portfolioModule = module.PortfolioModule;

    return portfolioModule;

};

export const lazyLoadAboutComponent: LoadChildrenCallback = async () => {

    const module = await import('../../portfolio/about/route/about.module');

    const aboutModule = module.AboutModule;

    return aboutModule;

};

export const lazyLoadTaskManager: LoadChildrenCallback = async () => {

    const module = await import('../../task-manager/route/task-manager.module');

    const taskManagerModule = module.TaskManagerModule;

    return taskManagerModule;

};