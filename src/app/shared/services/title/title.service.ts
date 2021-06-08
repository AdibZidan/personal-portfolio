import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  public constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) { }

  public setTitle(): void {
    this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe((): void => {
        const activatedRoute: ActivatedRoute = this.activatedRoute.children[0];
        const title: string = activatedRoute.snapshot.data.title;
        this.title.setTitle(title);
      });
  }

}
