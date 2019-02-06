import {Component, Input, OnInit} from '@angular/core';
import {CardType} from '../CardType';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() post: CardType;
  @Input() index: number;
  categories: string[];
  urls: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.initCard();
  }

  private initCard(): void {
    if (this.post.title.length > 15) {
      this.post.title = this.post.title.substring(0, 15) + '...';
    }
    if (this.post.subContent.length > 100) {
      this.post.subContent = this.post.subContent.substring(0, 100) + '...';
    }
    document.getElementsByClassName('item-meta-ico').item(this.index).classList.add('bg-ico-' + this.post.ico);
    this.generateCategory();
  }

  generateCategory() {
    this.categories = this.post.categories.split(',');
    this.categories.forEach(value => {
      this.urls.push(encodeURI(value));
    });
  }

}
