import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Data, Event, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class TitleService {

  constructor(private titleService: Title) { }

  public getDynamicRoute$(router: Router, activatedRoute: ActivatedRoute): Subscription {
    return router.events
      .pipe(
        filter((event: Event) => event instanceof NavigationEnd),
        map(() => activatedRoute),
        map((activatedRoute: ActivatedRoute) => this.getFirstChildFrom(activatedRoute)),
        filter((activatedRoute: ActivatedRoute) => activatedRoute.outlet === 'primary'),
        mergeMap((activatedRoute: ActivatedRoute) => activatedRoute.data))
      .subscribe((data: Data) => this.titleService.setTitle(data.title));
  }

  private getFirstChildFrom(activatedRoute: ActivatedRoute): ActivatedRoute {
    while (activatedRoute.firstChild) {
      activatedRoute = activatedRoute.firstChild;
    }

    return activatedRoute;
  }

}
