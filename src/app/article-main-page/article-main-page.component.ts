import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-article-main-page',
  templateUrl: './article-main-page.component.html',
  styleUrls: ['./article-main-page.component.css'],
  providers: [ArticleService]
})
export class ArticleMainPageComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
  gotoDetailPage(clickedArticle: Article) {
    this.router.navigate(['articles', clickedArticle.$key]);
  }

}
