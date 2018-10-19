import { Component, OnInit, Input} from '@angular/core';
import { Article } from './models/article.model';


@Component({
  selector: 'app-large-article',
  templateUrl: './large-article.component.html',
  styleUrls: ['./large-article.component.css']
})
export class LargeArticleComponent implements OnInit {
  @Input() childArticleList: Article[];

  constructor() { }

  ngOnInit() {
  }

}