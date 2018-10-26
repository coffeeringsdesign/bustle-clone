import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-large-article',
  templateUrl: './large-article.component.html',
  styleUrls: ['./large-article.component.css'],
  providers: [ArticleService]
})
export class LargeArticleComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
  goToDetailPage(clickedArticle) {
    this.router.navigate(['articles', clickedArticle.$key]);
    // console.log(clickedArticle.$key);
  }
}
