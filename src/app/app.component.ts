import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { easeIn } from '../assets/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [easeIn]
})

export class AppComponent {

  public prepare(outlet: RouterOutlet): RouterOutlet {
    const animation: RouterOutlet = outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;

    return animation;
  }

}
