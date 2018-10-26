import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles');
  }

  getArticles() {
    return this.articles;
  }

  addArticle(newArticle: Article) {
    this.articles.push(newArticle);
  }

  updateArticle(localUpdatedArticle) {
    var articleEntryinFirebase = this.getArticleById(localUpdatedArticle.$key);
    articleEntryinFirebase.update({title: localUpdatedArticle.title})
  }
  public sponsored: boolean, public picture: string, public title: string, public description: string, public author: string, public body: string, public subject: string, public date: number
}
