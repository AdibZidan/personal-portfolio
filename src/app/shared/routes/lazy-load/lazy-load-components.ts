import { LoadChildrenCallback } from '@angular/router';

export const lazyLoadPortfolioComponent: LoadChildrenCallback = async () => {
  const module = await import('@components/portfolio/portfolio.module');
  const portfolioModule = module.PortfolioModule;

  return portfolioModule;
};

export const lazyLoadAboutComponent: LoadChildrenCallback = async () => {
  const module = await import('@components/about/about.module');
  const aboutModule = module.AboutModule;

  return aboutModule;
};

export const lazyLoadTaskManager: LoadChildrenCallback = async () => {
  const module = await import('@components/task-manager/task-manager.module');
  const taskManagerModule = module.TaskManagerModule;

  return taskManagerModule;
};
