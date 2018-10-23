import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';


@Component({
  selector: 'app-large-article',
  templateUrl: './large-article.component.html',
  styleUrls: ['./large-article.component.css']
})
export class LargeArticleComponent {
  @Input() childArticleList: Article[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(articleToEdit: Article) {
    //this is receiveing the artcle chosen to be edited
    this.clickSender.emit(articleToEdit);
  }
}
