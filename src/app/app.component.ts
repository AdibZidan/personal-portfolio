import { Component } from '@angular/core';

import { easeIn } from '../assets/animations/animations';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [easeIn]
})

export class AppComponent {

  prepare(outlet: RouterOutlet) {
    const animation: RouterOutlet = outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];

    return animation;
  }

}
