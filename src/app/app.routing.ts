import { ModuleWithProviders } from '@angular/core'; // proves our router to the rest of the app
import { Routes, RouterModule } from '@angular/router'; // helps render components when specific URLs are provided
import { AppComponent } from './app.component'; // importing root comp to use as homepage

// setting up variable as Routes datatype... include all routes here...
const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent //whichever compo that will be homepage
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //variable routing is set as the return value of forRoot, the new variable is a ModuleWithProviders datatype
