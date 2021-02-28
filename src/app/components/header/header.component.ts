import { Component } from '@angular/core';
import { fadeIn, fadeOut } from '@animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class HeaderComponent {

  public isVisible: boolean = true;

  public onClick(): void {
    this.isVisible = !this.isVisible;
  }

}
