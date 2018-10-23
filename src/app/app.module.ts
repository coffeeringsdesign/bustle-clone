import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { masterFirebaseConfig } from './api-keys';  //add for firebase
import { AngularFireModule } from 'angularfire2'; //add for firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';  //add for firebase
import { AppComponent } from './app.component';
import { LargeArticleComponent } from './large-article/large-article.component';
import { MediumArticleComponent } from './medium-article/medium-article.component';
import { SmallArticleComponent } from './small-article/small-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { routing } from './app.routing';
import { ArticleMainPageComponent } from './article-main-page/article-main-page.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component'; //add for firebase
// import { WelcomeComponent } from './welcome/welcome.component';  if a component other than root is used for homepage import it here

//add for firebase::
export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}; //::

@NgModule({
  declarations: [
    AppComponent,
    LargeArticleComponent,
    MediumArticleComponent,
    SmallArticleComponent,
    EditArticleComponent,
    AddArticleComponent,
    ArticleMainPageComponent,
    HeaderNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig), // add for firebase
    AngularFireDatabaseModule, // add for firebase
    routing // add for routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
