import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'article-page',
  templateUrl: './article.component.html'
})

export class ArticleComponent implements  OnInit {
  public article;
  public _loaded: Boolean;
  constructor( private route: ActivatedRoute, private server: ServerService ) {
    const link = this.route.snapshot.params.link;
    this._loaded = false;
    console.log( this.server.articles.length );
    if ( this.server.articles.length ) {
      this.article = this.server.articles.find( art => art.link === link);
      console.log(100);
      this._loaded = true;
    } else {
      this.server.fetchArticles().then( res => {
        this.server.articles = res['articulos'];
        this.article = res['articulos'].find( article => article.link === link); console.log(500);
        this._loaded = true;
      });
    }
  }

  ngOnInit() {

  }
  get loaded() {
    return this._loaded;
  }
}
