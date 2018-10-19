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
  masterArticleList: Article[] = [
    new Article(false, "./assets/img/sarah-paulson1.jpg", "Sarah Paulson's Ageism Comments Show That 'Over The Hill' Is Just A Myth", "It's never too late to follow your dreams, and Sarah Paulson is living proof. In a new interview with Elle, the Emmy winner opened up about her Hollywood experience. Sarah Paulson's comments about ageism are a refreshing reminder that life doesn't end at a certain age.", "Meghan Demaria", "Janelle Monáe is utterly composed as she tromps through the mud in many lengths of banana-hued silk organza and a pair of rain boots from Lowe’s. Handlers and helpers hold her hem high, their umbrellas lofted to protect the Mongolian lamb fluff on the David Ferreira overcoat dress and Monáe’s flawless face. Amid the downpour soaking the set (the historic Pullman Yards, a former munitions factory on Atlanta’s east side), Monáe approaches the camera poised, focused. She kicks off the boots and climbs atop a small tower of crates; she summits and smiles. She is a woman who knows her angles.Janelle Monáe carries herself like a person who lives by a stringent personal code. She is careful and considered and clearly holds professionalism as a virtue.", "Entertainment", 10/19/2018),
    new Article(false, "./assets/img/janelle-monae1.jpg", "Janelle Monáe Is Breaking Rules & Creating A Space For Others To Do The Same", "Janelle Monáe is utterly composed as she tromps through the mud in many lengths of banana-hued silk organza and a pair of rain boots from Lowe’s. Handlers and helpers hold her hem high, their umbrellas lofted to protect the Mongolian lamb fluff on the David Ferreira overcoat dress ", "Jessica Hopper", "Janelle Monáe is utterly composed as she tromps through the mud in many lengths of banana-hued silk organza and a pair of rain boots from Lowe’s. Handlers and helpers hold her hem high, their umbrellas lofted to protect the Mongolian lamb fluff on the David Ferreira overcoat dress and Monáe’s flawless face. Amid the downpour soaking the set (the historic Pullman Yards, a former munitions factory on Atlanta’s east side), Monáe approaches the camera poised, focused. She kicks off the boots and climbs atop a small tower of crates; she summits and smiles. She is a woman who knows her angles.Janelle Monáe carries herself like a person who lives by a stringent personal code. She is careful and considered and clearly holds professionalism as a virtue.", "Entertainment", 10/10/2018),
    new Article(false, "./assets/img/stranger-things1.jpg", "'Stranger Things' Group Halloween Costume Ideas That Will Bring You Straight To The Upside Down", "Fans have to patiently hang tight for nearly a year until Stranger Things 3 premieres in summer 2019. While the wait seems super long, there is a silver lining. Halloween is around the corner and there are plenty of Stranger Things group costume ideas that will allow you to channel the show and make the wait feel a bit more bearable.", "Taylor Ferberst", "Janelle Monáe is utterly composed as she tromps through the mud in many lengths of banana-hued silk organza and a pair of rain boots from Lowe’s. Handlers and helpers hold her hem high, their umbrellas lofted to protect the Mongolian lamb fluff on the David Ferreira overcoat dress and Monáe’s flawless face. Amid the downpour soaking the set (the historic Pullman Yards, a former munitions factory on Atlanta’s east side), Monáe approaches the camera poised, focused. She kicks off the boots and climbs atop a small tower of crates; she summits and smiles. She is a woman who knows her angles.Janelle Monáe carries herself like a person who lives by a stringent personal code. She is careful and considered and clearly holds professionalism as a virtue.", "Entertainment", 9/19/2018)
  ];

  finishedEditing() {
    this.selectedArticle = null;
  }

  editArticle() {
    this.selectedArticle = clickedArticle;
  }
}
