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
    this.generateCategores();
  }

  generateCategores() {
    this.post.categories.split(',').forEach(value => {
      const a = document.createElement('a');
      a.href = '/c/' + encodeURI(value);
      a.innerText = value;
      document.getElementsByClassName('item-meta-cat')[this.index].appendChild(a);
    });
  }

}
