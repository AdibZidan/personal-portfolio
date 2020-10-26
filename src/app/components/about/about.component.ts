import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { languages } from '../../shared/languages/languages';
import { backEnd, frontEnd, other } from '../../shared/languages/technology-stack';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public isArrowShown: boolean = false;
  public languages: string[] = languages;
  public frontEndStacks: string[] = frontEnd;
  public backEndStack: string = backEnd;
  public otherStacks: string[] = other;

  constructor(
    private viewportScroller: ViewportScroller
  ) { }

  @HostListener('window:scroll')
  public onScroll(): void {
    const yAxis: number = this.viewportScroller.getScrollPosition()[1];

    if (yAxis > 700) {
      this.isArrowShown = true;
    } else {
      this.isArrowShown = false;
    }
  }

  public scrollToTop(): void {
    window.scroll({
      top: 0, left: 0, behavior: 'smooth'
    });
  }

  public get age(): number {
    const currentYear: number = new Date().getFullYear();
    const bornYear: number = new Date('January 1, 1995').getFullYear();
    const currentAge: number = currentYear - bornYear;

    return currentAge;
  }

}
