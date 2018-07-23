import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './404/404.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { NavBarComponent } from './nav/nav.component';

import { ServerService } from './services/server.service';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ArticleComponent,
    ArticlesComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    CommonModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
