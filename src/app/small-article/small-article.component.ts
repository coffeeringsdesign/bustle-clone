import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-small-article',
  templateUrl: './small-article.component.html',
  styleUrls: ['./small-article.component.css'],
  providers: [ArticleService]
})
export class SmallArticleComponent implements OnInit {
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
