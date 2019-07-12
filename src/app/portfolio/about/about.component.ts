import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  languages: string[] = ['English,', 'Arabic,', 'Russian', '& German.'];

  technologyStacks: string[] = [
    'HTML5,', 'CSS3,', 'SCSS,',
    'JavaScript ES6+,', 'TypeScript,', 'Angular 8,',
    'Docker,', 'Git/GitHub,', 'Ubuntu,',
    'Node.JS,', 'npm,', '& Visual Studio Code.'
  ];

  constructor() { }

  ngOnInit() { }

  onClick() { window.scroll({ top: 0, left: 0, behavior: 'smooth' }); }
}
