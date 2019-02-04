import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
  nowTime: number = Date.now();

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('归档');
    document.body.style.backgroundColor = '#f7f7f7';
  }

}
