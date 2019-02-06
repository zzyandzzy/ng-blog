import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostDataService} from '../postData.service';
import {PostType} from '../PostType';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewChecked {

  constructor(private route: ActivatedRoute, private postDataService: PostDataService, private titleService: Title) {
  }

  slug: string;
  post: PostType;
  errorCode: number;
  createView = false;

  static postChildren(childNodes, reg) {
    const result = [];
    const isReg = typeof reg === 'object';
    const isStr = typeof reg === 'string';
    let node;
    let i;
    let len;
    for (i = 0, len = childNodes.length; i < len; i++) {
      node = childNodes[i];
      if ((node.nodeType === 1 || node.nodeType === 9) &&
        (!reg ||
          isReg && reg.test(node.tagName.toLowerCase()) ||
          isStr && node.tagName.toLowerCase() === reg)) {
        result.push(node);
      }
    }
    return result;
  }

  ngOnInit() {
    this.getPost();
  }

  private getPost() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.postDataService.getPostSlug(this.slug).subscribe(res => {
      this.post = res.data;
      this.errorCode = res.code;
      if (this.errorCode === 200) {
        this.titleService.setTitle(this.post.title + ' - blog');
      } else {
        this.titleService.setTitle('错误 - blog');
      }
    });
  }

  generateCategory() {
    this.post.categories.split(',').forEach(value => {
      const a = document.createElement('a');
      a.href = '/c/' + encodeURI(value);
      a.innerText = value;
      document.getElementById('post-categories').appendChild(a);
    });
  }

  ngAfterViewChecked(): void {
    if (!this.createView && document.getElementById('post-content')) {
      this.createView = true;
      this.generateCategory();
      this.createPostDirectory(document.getElementById('post-content-div'), document.getElementById('directory'), true);
    }
  }

  createPostDirectory(article, directory, isDirNum) {
    const contentArr = [];
    const titleId = [];
    const levelArr = new LevelArr(article, contentArr, titleId);
    let root;
    let level;
    let currentList;
    let list;
    let li;
    let link;
    let i;
    let len;
    currentList = root = document.createElement('ul');
    const dirNum = [0];
    for (i = 0, len = levelArr.levelArr.length; i < len; i++) {
      level = levelArr.levelArr[i];
      if (level === 1) {
        list = document.createElement('ul');
        if (!currentList.lastElementChild) {
          currentList.appendChild(document.createElement('li'));
        }
        currentList.lastElementChild.appendChild(list);
        currentList = list;
        dirNum.push(0);
      } else if (level < 0) {
        level *= 2;
        while (level++) {
          if (level % 2) {
            dirNum.pop();
          }
          currentList = currentList.parentNode;
        }
      }
      dirNum[dirNum.length - 1]++;
      li = document.createElement('li');
      link = document.createElement('a');
      link.href = '/p/' + this.post.slug + '#' + titleId[i];
      link.innerHTML = !isDirNum ? contentArr[i] :
        dirNum.join('.') + ' ' + contentArr[i];
      li.appendChild(link);
      currentList.appendChild(li);
    }
    directory.appendChild(root);
  }

}

class LevelArr {
  levelArr = [];

  constructor(article, contentArr, titleId) {
    const titleElem = PostComponent.postChildren(article.childNodes, /^h\d$/);
    let lastNum = 1;
    let lastRevNum = 1;
    let count = 0;
    let guid = 1;
    const id = 'directory' + (Math.random() + '').replace(/\D/, '');
    let num;
    let elem;
    while (titleElem.length) {
      elem = titleElem.shift();
      contentArr.push(elem.innerHTML);
      num = +elem.tagName.match(/\d/)[0];
      if (num > lastNum) {
        this.levelArr.push(1);
        lastRevNum += 1;
      } else if (num === lastRevNum ||
        num > lastRevNum && num <= lastNum) {
        this.levelArr.push(0);
      } else if (num < lastRevNum) {
        this.levelArr.push(num - lastRevNum);
        lastRevNum = num;
      }
      count += this.levelArr[this.levelArr.length - 1];
      lastNum = num;
      elem.id = elem.id || (id + guid++);
      titleId.push(elem.id);
    }
    if (count !== 0 && this.levelArr[0] === 1) {
      this.levelArr[0] = 0;
    }
  }
}
