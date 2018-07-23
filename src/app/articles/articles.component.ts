import {Component, OnInit} from '@angular/core';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'articles-page',
  templateUrl: './articles.component.html'
})

export class ArticlesComponent implements  OnInit {
  public articles;
  constructor( private server: ServerService ) {
    this.articles = this.server.articles;
  }

  ngOnInit() {
    this.server.fetchArticles()
      .then( res => {
        this.server.articles = res['articulos'];
        this.articles = this.server.articles;
      });
  }
}
