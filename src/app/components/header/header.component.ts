import { Component } from '@angular/core';
import { fadeIn } from '@animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeIn]
})
export class HeaderComponent {

  public isVisible: boolean = true;

  public onClick(): void {
    this.isVisible = !this.isVisible;
  }

}
