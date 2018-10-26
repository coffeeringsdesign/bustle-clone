import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
// import { ARTICLES } from './mock-album';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles() {
    // return ARTICLES;
  }

  getArticleById(albumId: number){
    for (var i =0; i <= ARTICLES.length -1; i++) {
      if (ARTICLES[i].id === articleId) {
        return ARTICLES[i];
      }
    }
  }
}
