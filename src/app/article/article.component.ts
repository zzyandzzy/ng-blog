import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getArticle();
  }

  private getArticle() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
}
