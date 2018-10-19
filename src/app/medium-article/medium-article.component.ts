import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-medium-article',
  templateUrl: './medium-article.component.html',
  styleUrls: ['./medium-article.component.css']
})
export class MediumArticleComponent implements OnInit {
  @Input() childArticleList: Article[];
  @Output() editClickSender = new EventEmitter();

  editButtonClicked(articleToEdit: Article) {
    this.editClickSender.emit(articleToEdit);
  }

  constructor() { }

  ngOnInit() {
  }

}
