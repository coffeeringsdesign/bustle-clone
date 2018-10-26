import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  @Output() sendNewArticle = new EventEmitter();

  // submitNewArticleForm(sponsored: boolean, picture: string, title: string, description: string, author: string, body: string, subject: string, date: number) {
  //   let newArticle: Article = new Article(sponsored, picture, title, description, author, body, subject, date);
  //   this.sendNewArticle.emit(newArticle);
  // }

  constructor() { }

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
    }
}
