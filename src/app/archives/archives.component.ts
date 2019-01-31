import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
  nowTime: number = Date.now();

  constructor() {
  }

  ngOnInit() {
  }

}
