import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  showArrow: boolean = false;

  languages: string[] = ['English,', 'Arabic,', 'Russian', '& German.'];

  technologyStacks: string[] = [
    'HTML5,', 'CSS3,', 'SCSS,',
    'JavaScript ES6+,', 'TypeScript,', 'Angular 8,',
    'Docker,', 'Git/GitHub,', 'Ubuntu,',
    'Node.JS,', 'npm,', '& Visual Studio Code.'
  ];

  constructor() { }

  ngOnInit(): void { }

  onClick(): void {
    this.showArrow = false;
    this.scrollUp();
  }

  @HostListener('window:scroll', [])
  onScroll(): void { this.isUserOnBottom(); }

  private scrollUp(): void { window.scroll({ top: 0, left: 0, behavior: 'smooth' }); }

  private isUserOnBottom(): void { this.onBottom(); }

  private onBottom(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.showArrow = true;
    }
  }

}
