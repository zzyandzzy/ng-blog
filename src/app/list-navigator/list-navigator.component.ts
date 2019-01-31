import {Component, Input, OnInit} from '@angular/core';
import {ArticleDataService} from '../articleData.service';

@Component({
  selector: 'app-list-navigator',
  templateUrl: './list-navigator.component.html',
  styleUrls: ['./list-navigator.component.css']
})
export class ListNavigatorComponent implements OnInit {
  pageCount: number;
  @Input() pageNumber = 1;

  constructor(private articleDataService: ArticleDataService) {
  }

  ngOnInit() {
    this.getPageCount();
  }

  private getPageCount() {
    this.articleDataService.getPageCount().subscribe(count => this.pageCount = count);
  }
}
