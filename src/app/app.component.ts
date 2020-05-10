import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { easeIn } from '../assets/animations/animations';
import { TitleService } from './shared/services/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [easeIn]
})
export class AppComponent implements OnInit {

  public subscription: Subscription = new Subscription();

  constructor(
    private titleService: TitleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dynamicallyChangeRouteUrl();
  }

  public dynamicallyChangeRouteUrl(): void {
    this.subscription = this.titleService
      .getDynamicRoute$(
        this.router,
        this.activatedRoute
      );
  }

  public prepare(routerOutlet: RouterOutlet): RouterOutlet {
    return this.getAnimation(routerOutlet);
  }

  private getAnimation(routerOutlet: RouterOutlet): RouterOutlet {
    return routerOutlet &&
      routerOutlet.activatedRouteData &&
      routerOutlet.activatedRouteData.animation;
  }

}
