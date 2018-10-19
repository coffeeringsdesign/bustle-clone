import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './../models/article.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  @Input() childSelectedArticle: Article;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
