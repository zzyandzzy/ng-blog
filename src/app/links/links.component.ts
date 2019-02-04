import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  nowTime: number = Date.now();

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('友链');
  }

}
