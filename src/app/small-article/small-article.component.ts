import { Component, OnInit, Input } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-small-article',
  templateUrl: './small-article.component.html',
  styleUrls: ['./small-article.component.css']
})
export class SmallArticleComponent implements OnInit {
    @Input() childArticleList: Article[];

  constructor() { }

  ngOnInit() {
  }

}
