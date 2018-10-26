import { Component, OnInit, Output } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
  // providers: [ArticleService]
})
export class AddArticleComponent implements OnInit {

  // submitNewArticleForm(sponsored: boolean, picture: string, title: string, description: string, author: string, body: string, subject: string, date: number) {
  //   let newArticle: Article = new Article(sponsored, picture, title, description, author, body, subject, date);
  //   this.sendNewArticle.emit(newArticle);
  // }

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  submitNewArticleForm(
    sponsored: boolean,
    picture: string,
    title: string,
    description: string,
    author: string,
    body: string,
    subject: string,
    date: number) {
      var newArticle: Article = new Article(sponsored, picture, title, description, author, body, subject, date);
      this.articleService.addArticle(newArticle);
    }
}
