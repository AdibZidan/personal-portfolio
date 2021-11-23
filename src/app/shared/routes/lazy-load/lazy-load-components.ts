import { LoadChildrenCallback } from '@angular/router';

export const lazyLoadPortfolioComponent: LoadChildrenCallback = async () => {
  const module = await import('@components/portfolio/portfolio.module');

  return module.PortfolioModule;
};

export const lazyLoadAboutComponent: LoadChildrenCallback = async () => {
  const module = await import('@components/about/about.module');

  return module.AboutModule;
};

export const lazyLoadTaskManager: LoadChildrenCallback = async () => {
  const module = await import('@components/task-manager/task-manager.module');

  return module.TaskManagerModule;
};
