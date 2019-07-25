import { Component, OnInit, HostListener } from '@angular/core';

import { frontEnd, backEnd, other } from './language/technology-stack';

import { languages } from './language/language';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  public showArrow: boolean = false;

  public languages = languages;
  public frontEndStacks = frontEnd
  public backEndStack = backEnd;
  public otherStacks = other;

  constructor() { }

  ngOnInit(): void { }

  public onClick(): void {
    this.showArrow = false;
    this.scrollUp();
  }

  @HostListener('window:scroll', [])
  public onScroll(): void { this.isUserOnBottom(); }

  private scrollUp(): void { window.scroll({ top: 0, left: 0, behavior: 'smooth' }); }

  private isUserOnBottom(): void { this.onBottom(); }

  private onBottom(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.showArrow = true;
    }
  }

}
