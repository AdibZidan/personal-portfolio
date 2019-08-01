import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void { this.changeTitle(); }

  private changeTitle(): void { this.titleService.setTitle('Portfolio'); }

}
