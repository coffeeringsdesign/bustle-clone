import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Provider }
// import { Observable } from 'rxjs/Rx';

// @Injectable()
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
    articleEntryinFirebase.update({sponsored: localUpdatedArticle.sponsored,
                                  picture: localUpdatedArticle.picture,
                                  title: localUpdatedArticle.title,
                                  description: localUpdatedArticle.description,
                                  author: localUpdatedArticle.author,
                                  body: localUpdatedArticle.body,
                                  subject: localUpdatedArticle.subject,
                                  date: localUpdatedArticle.date })
  }

  getArticleById(articleId: string) {
    return this.database.object('articles/' + articleId);
  }

  deleteArticle(localArticletoDelete) {
    var articleEntryinFirebase = this.getArticleById(localArticletoDelete.$key);
    articleEntryinFirebase.remove();
  }
}
