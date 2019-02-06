import {Component, OnInit} from '@angular/core';
import {CardType} from '../CardType';
import {ActivatedRoute} from '@angular/router';
import {PostDataService} from '../postData.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: string;
  postList: CardType[];
  errorCode: number;

  constructor(private route: ActivatedRoute, private postDataService: PostDataService, private titleService: Title) {
  }

  ngOnInit() {
    document.body.style.backgroundColor = '#f7f7f7';
    this.getAllPostCategory();
  }

  getAllPostCategory() {
    this.category = this.route.snapshot.paramMap.get('c');
    this.postDataService.getAllPostCategory(this.category).subscribe(res => {
      this.postList = res.data;
      this.errorCode = res.code;
      if (this.errorCode === 200) {
        this.titleService.setTitle(this.category + ' - blog');
      } else {
        this.titleService.setTitle('错误 - blog');
      }
    });
  }
}
