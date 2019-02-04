import {Component, Input, OnInit} from '@angular/core';
import {PostDataService} from '../postData.service';

@Component({
  selector: 'app-list-navigator',
  templateUrl: './list-navigator.component.html',
  styleUrls: ['./list-navigator.component.css']
})
export class ListNavigatorComponent implements OnInit {

  constructor(private articleDataService: PostDataService) {
  }

  @Input() currentPage: number;
  pageCount: number;

  static genElementA(href, text): HTMLElement {
    const a = document.createElement('a');
    a.href = href;
    a.innerText = text;
    return a;
  }

  static getElementLi(name: string, a: HTMLElement): HTMLElement {
    const li = document.createElement('li');
    li.className = name;
    li.appendChild(a);
    return li;
  }

  ngOnInit() {
    this.getPageCount();
    this.initNav();
  }

  initNav() {
    document.getElementById('page-nav').appendChild(
      ListNavigatorComponent.getElementLi('current',
        ListNavigatorComponent.genElementA('/page/1', this.currentPage)));
    if (this.pageCount === 2) {
    } else if (this.pageCount === 3) {
    } else if (this.pageCount > 3) {
    }
  }


  private getPageCount() {
    this.articleDataService.getPageCount().subscribe(count => this.pageCount = count);
  }
}
