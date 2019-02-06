import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {PostDataService} from '../postData.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  categories: string[];
  urls: string[] = [];
  errorCode: number;

  constructor(private titleService: Title, private postDateService: PostDataService) {
  }

  ngOnInit() {
    this.titleService.setTitle('搜索');
    document.body.style.backgroundColor = '#f7f7f7';
    this.getAllCategory();
  }

  getAllCategory() {
    this.postDateService.getAllCategory().subscribe(res => {
      this.categories = res.data;
      this.errorCode = res.code;
      this.categories.forEach(value => {
        this.urls.push(encodeURI(value));
      });
    });
  }
}
