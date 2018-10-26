import { Component } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticleService]
})

export class AdminComponent {

  constructor(private articleService: ArticleService) { }

  // submitForm(
  //   sponsored: boolean,
  //   picture: string,
  //   title: string,
  //   description: string,
  //   author: string,
  //   body: string,
  //   subject: string,
  //   date: number) {
  //     var newArticle: Article = new Article(sponsored, picture, title, description, author, body, subject, date);
  //   }
}
