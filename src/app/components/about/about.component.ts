import { Component } from '@angular/core';
import { languages } from '@shared/languages/languages';
import { backEnd, frontEnd, other } from '@shared/languages/technology-stack';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public get age(): number {
    const currentYear: number = new Date().getFullYear();
    const bornYear: number = new Date('January 1, 1995').getFullYear();

    return currentYear - bornYear;
  }

  public isArrowShown: boolean = false;
  public languages: string[] = languages;
  public frontEndStacks: string[] = frontEnd;
  public backEndStack: string = backEnd;
  public otherStacks: string[] = other;

  public setIsArrowShown(isArrowShown: boolean): void {
    this.isArrowShown = isArrowShown;
  }

  public scrollToTop(): void {
    window.scroll({
      top: 0, left: 0, behavior: 'smooth'
    });
  }

}
