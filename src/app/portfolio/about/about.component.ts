import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  languages: string[] = ['English', 'Arabic', 'Russian', '& German'];

  constructor() { }

  ngOnInit() { }

}
