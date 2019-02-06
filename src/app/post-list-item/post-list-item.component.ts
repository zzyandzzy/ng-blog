import {Component, Input, OnInit} from '@angular/core';
import {CardType} from '../CardType';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() post: CardType;
  @Input() index: number;

  constructor() {
  }

  ngOnInit() {
    document.getElementsByClassName('item-meta-ico').item(this.index).classList.add('bg-ico-' + this.post.ico);
    if (this.post.title.length > 15) {
      this.post.title = this.post.title.substring(0, 15) + '...';
    }
  }

}
