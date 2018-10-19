import { Component, OnInit, Input } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-medium-article',
  templateUrl: './medium-article.component.html',
  styleUrls: ['./medium-article.component.css']
})
export class MediumArticleComponent implements OnInit {
  @Input() childArticleList: Article[];

  constructor() { }

  ngOnInit() {
  }

}
