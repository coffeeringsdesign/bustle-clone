import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './../models/article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})

export class EditArticleComponent{
  @Input() selectedArticle;

  constructor(private articleService: ArticleService) { }

  beginUpdatingArticle(articleToUpdate) {
    this.articleService.updateArticle(articleToUpdate);
  }

  beginDeletingArticle(articletoDelete) {
    if(confirm("sure you want to delete?")) {
      this.articleService.deleteArticle(articletoDelete);
    }
  }
}
