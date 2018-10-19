import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './models/article.model';


@Component({
  selector: 'app-large-article',
  templateUrl: './large-article.component.html',
  styleUrls: ['./large-article.component.css']
})
export class LargeArticleComponent implements OnInit {
  @Input() childArticleList: Article[];
  @Output() editClickSender = new EventEmitter();

  editButtonClicked(articleToEdit: Article) {
    this.editClickSender.emit(articleToEdit);
  }

  constructor() { }

  ngOnInit() {
  }

}
