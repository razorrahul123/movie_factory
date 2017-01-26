import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path:'movie/:id',
    component:MovieComponent
  }
];

export const appRoutngProviders: any[]=[];

export const routing:ModuleWithProviders= RouterModule.forRoot(appRoutes);

