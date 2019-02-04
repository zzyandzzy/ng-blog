import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  issueTime: number = Date.now();

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('关于');
  }
}
