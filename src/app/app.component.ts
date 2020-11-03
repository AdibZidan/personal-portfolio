import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { easeIn } from '@animations';
import { TitleService } from './shared/services/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [easeIn]
})
export class AppComponent implements OnInit {

  constructor(
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
    this.dynamicallyChangeRouteUrl();
  }

  public dynamicallyChangeRouteUrl(): void {
    this.titleService.setTitle();
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
