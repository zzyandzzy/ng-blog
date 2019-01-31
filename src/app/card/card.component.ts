import {Component, Input, OnInit} from '@angular/core';
import {ArticleType} from '../articleType';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() article: ArticleType;
  @Input() index: number;

  constructor() {
  }

  ngOnInit() {
    this.initCard();
  }

  private initCard(): void {
    document.getElementsByClassName('item-meta-ico').item(this.index).classList.add('bg-ico-' + this.article.labelImg);
  }

}
