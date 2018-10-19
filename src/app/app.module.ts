import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LargeArticleComponent } from './large-article/large-article.component';
import { ArticleListComponent } from './article-list/article-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LargeArticleComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
