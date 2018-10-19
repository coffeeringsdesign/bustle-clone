import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LargeArticleComponent } from './large-article/large-article.component';
import { MediumArticleComponent } from './medium-article/medium-article.component';
import { SmallArticleComponent } from './small-article/small-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';


@NgModule({
  declarations: [
    AppComponent,
    LargeArticleComponent,
    MediumArticleComponent,
    SmallArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
