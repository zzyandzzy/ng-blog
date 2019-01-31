import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {ArticleType} from '../articleType';
import {ArticleDataService} from '../articleData.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, AfterViewChecked {
  articles: ArticleType[];
  pageIndex: number;

  constructor(private articleDataService: ArticleDataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getArticles();
  }

  ngAfterViewChecked() {
    this.getPageIndex();
  }

  getArticles(): void {
    this.articleDataService.getArticle().subscribe(articles => this.articles = articles);
  }

  getPageIndex(): void {
    this.pageIndex = +this.route.snapshot.paramMap.get('id');
    if (this.pageIndex === 0) {
      this.pageIndex = 1;
    }
    console.log(this.pageIndex);
  }
}
