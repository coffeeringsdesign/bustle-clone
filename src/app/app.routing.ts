import { ModuleWithProviders } from '@angular/core'; // proves our router to the rest of the app
import { Routes, RouterModule } from '@angular/router'; // helps render components when specific URLs are provided
import { ArticleMainPageComponent } from './article-main-page/article-main-page.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AdminComponent } from './admin/admin.component';


// setting up variable as Routes datatype... include all routes here...
const appRoutes: Routes = [
  {
    path: '',
    component: ArticleMainPageComponent //whichever compo that will be homepage
  },
  {
    path: 'articles/:id',
    component: ArticleDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //variable routing is set as the return value of forRoot, the new variable is a ModuleWithProviders datatype
