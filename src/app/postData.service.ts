import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResultResponse} from './ResultResponse';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  getAllPost(): Observable<ResultResponse> {
    return this.http.post<ResultResponse>('http://localhost:9999/post/api/get_all_post', {
      pageNum: 0
    }, httpOptions).pipe();
  }

  getPostSlug(path: string): Observable<ResultResponse> {
    return this.http.post<ResultResponse>('http://localhost:9999/post/api/get_post_slug', {
      slug: path
    }, httpOptions).pipe(tap(_ => console.log(`get post by slug, slug: ${path}`)));
  }

  getAllPostCategory(cate: string): Observable<ResultResponse> {
    return this.http.post<ResultResponse>('http://localhost:9999/post/api/get_all_post_category', {
      pageNum: 0,
      category: cate
    }, httpOptions).pipe(tap(_ => console.log(`get all post by category: ${cate}`)));
  }

  getPageCount(): Observable<number> {
    return of(1);
  }

  constructor(private http: HttpClient) {
  }
}
