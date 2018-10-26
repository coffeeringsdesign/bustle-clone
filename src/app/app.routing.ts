import { ModuleWithProviders } from '@angular/core'; // proves our router to the rest of the app
import { Routes, RouterModule } from '@angular/router'; // helps render components when specific URLs are provided
import { AppComponent } from './app.component'; // importing root comp to use as homepage
import { ArticleMainPageComponent } from './article-main-page/article-main-page.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

// setting up variable as Routes datatype... include all routes here...
const appRoutes: Routes = [
  {
    path: '',
    component: ArticleMainPageComponent //whichever compo that will be homepage
  },
  {
    path: 'articles/:id',
    component: ArticleDetailComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //variable routing is set as the return value of forRoot, the new variable is a ModuleWithProviders datatype
