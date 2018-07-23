import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './404/404.component';

const appRoutes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:link', component: ArticleComponent },
  { path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
