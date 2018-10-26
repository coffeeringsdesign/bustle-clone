import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  providers: [ArticleService]
})

export class ArticleDetailComponent implements OnInit {
  articleId: string;
  articleToDisplay: Article;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.articleId = urlParametersArray['id'];
    });

    this.articleService.getArticleById(this.articleId).subscribe(dataLastEmittedFromObserver => {
      // console.log(this.articleId); this.articleId is getting this far
    this.articleToDisplay = new Article(dataLastEmittedFromObserver.sponsored,
                                          dataLastEmittedFromObserver.picture,
                                          dataLastEmittedFromObserver.title,
                                          dataLastEmittedFromObserver.description,
                                          dataLastEmittedFromObserver.author,
                                          dataLastEmittedFromObserver.body,
                                          dataLastEmittedFromObserver.subject,
                                          dataLastEmittedFromObserver.date)
                                          // console.log("blah" + this.articleToDisplay.title); not getting this far but this is showing
    });
  }

}
