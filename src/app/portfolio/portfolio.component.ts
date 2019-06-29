import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {
  portfolio: string = 'Portfolio';
  hobbies: string[] = ['Coding', 'Powerlifting', 'Reading books', 'Running', 'Travelling'];
  specialties: string[] = ['HTML5', 'CSS3', 'JavaScript (ES2015+)', 'TypeScript', 'Angular 8', 'Docker', 'Linux', 'Git and GitHub'];

  constructor() { }

  ngOnInit() { }

}
