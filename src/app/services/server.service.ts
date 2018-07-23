import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private baseUrl;
  private _cache;
  constructor( private http: HttpClient ) {
    this.baseUrl = '/api/v1';
    this._cache = {
      articles: []
    };
  }

  fetchArticles() {
    return this.http.get( this.baseUrl.concat('/articles') )
      .toPromise();
  }

  set articles( articles ) {
    this._cache.articles = articles;
  }
  get articles() {
    return this._cache.articles;
  }
}
