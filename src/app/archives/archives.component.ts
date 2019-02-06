import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {PostDataService} from '../postData.service';
import {CardType} from '../CardType';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})

export class ArchivesComponent implements OnInit {
  postList: CardType[];
  errorCode: number;
  // 储存了以月分类的文章
  archivesMap: CardType[][] = [];

  constructor(private titleService: Title, private postDataService: PostDataService) {
  }

  ngOnInit() {
    this.titleService.setTitle('归档');
    document.body.style.backgroundColor = '#f7f7f7';
    this.getAllPostArchive();
  }

  getAllPostArchive() {
    this.postDataService.getAllPostArchive().subscribe(res => {
      this.postList = res.data;
      this.errorCode = res.code;
      if (this.errorCode === 200) {
        this.titleService.setTitle('归档 - blog');
      } else {
        this.titleService.setTitle('错误 - blog');
      }
      this.monthArchive();
    });
  }

  // 按月分类的文章集合
  monthArchive() {
    let i;
    for (i = 0; i < this.postList.length; i++) {
      const date = new Date(this.postList[i].created * 1000);
      if (this.archivesMap[date.getMonth()]) {
        this.archivesMap[date.getMonth()].push(this.postList[i]);
      } else {
        const array = [];
        array.push(this.postList[i]);
        this.archivesMap[date.getMonth()] = array;
      }
    }
  }
}
