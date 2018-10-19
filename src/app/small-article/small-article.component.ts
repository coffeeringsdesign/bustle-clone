import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-small-article',
  templateUrl: './small-article.component.html',
  styleUrls: ['./small-article.component.css']
})
export class SmallArticleComponent implements OnInit {
    @Input() childArticleList: Article[];
    @Output() editClickSender = new EventEmitter();

    editButtonClicked(articleToEdit: Article) {
      this.editClickSender.emit(articleToEdit);
    }

  constructor() { }

  ngOnInit() {
  }

}
