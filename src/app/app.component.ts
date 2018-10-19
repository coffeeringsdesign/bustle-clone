import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Bustle";
  masterArticleList: Article[] = [
    new Article(false, ./assets/img/sarah-paulson1.jpg, "Sarah Paulson's Ageism Comments Show That 'Over The Hill' Is Just A Myth", "It's never too late to follow your dreams, and Sarah Paulson is living proof. In a new interview with Elle, the Emmy winner opened up about her Hollywood experience. Sarah Paulson's comments about ageism are a refreshing reminder that life doesn't end at a certain age.", "Meghan Demaria", "Entertainment", "10/19/2018"),
  ];
}
