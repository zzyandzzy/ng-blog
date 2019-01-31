import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ArticleType} from './articleType';
import {ARTICLES} from './mock-card-datas';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
  getArticle(): Observable<ArticleType[]> {
    return of(ARTICLES);
  }

  getPageCount(): Observable<number> {
    return of(8);
  }

  constructor() {
  }
}
