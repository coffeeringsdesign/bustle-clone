import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = "Bustle";
  selectedArticle = null;

  finishedEditing() {
    this.selectedArticle = null;
  }

  editArticle(clickedArticle) {
    this.selectedArticle = clickedArticle;
  }

  addNewArticle(newArticle: Article) {
    this.masterArticleList.push(newArticle);
  }

}
