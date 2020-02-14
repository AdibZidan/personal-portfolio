import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/assets/animations/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeIn]
})

export class HeaderComponent implements OnInit {

  public isVisible: boolean = true;

  constructor() { }

  ngOnInit(): void { }

  public onClick(): void {
    this.isVisible = !this.isVisible;
  }

}
