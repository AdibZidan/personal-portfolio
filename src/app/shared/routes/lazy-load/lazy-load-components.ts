import { LoadChildrenCallback } from '@angular/router';

export const lazyLoadPortfolioComponent: LoadChildrenCallback = async () => {
  const module = await import('../../modules/portfolio/portfolio.module');
  const portfolioModule = module.PortfolioModule;

  return portfolioModule;
};

export const lazyLoadAboutComponent: LoadChildrenCallback = async () => {
  const module = await import('../../modules/about/about.module');
  const aboutModule = module.AboutModule;

  return aboutModule;
};

export const lazyLoadTaskManager: LoadChildrenCallback = async () => {
  const module = await import('../../modules/task-manager/task-manager.module');
  const taskManagerModule = module.TaskManagerModule;

  return taskManagerModule;
};
