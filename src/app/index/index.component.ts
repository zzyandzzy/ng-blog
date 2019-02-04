import {Component, OnInit} from '@angular/core';
import {CardType} from '../CardType';
import {PostDataService} from '../postData.service';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  currentPage: number;
  postList: CardType[] | string;
  errorCode: number;

  constructor(private postDataService: PostDataService, private route: ActivatedRoute, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('首页 - blog');
    this.currentPage = +this.route.snapshot.paramMap.get('id');
    if (this.currentPage === 0) {
      this.currentPage = 1;
    }
    this.getPostList();
  }


  getPostList(): void {
    this.postDataService.getAllPost().subscribe(res => {
      this.postList = res.data;
      this.errorCode = res.code;
    });
  }
}
