import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      { path: '', redirectTo: '/movies', pathMatch: 'full' },
      { path: 'movies', loadChildren: () => import('./pages/movie-list/movie-list.module').then(m => m.MovieListModule) },
      { path: 'movies/:id', loadChildren: () => import('./pages/movie-detail/movie-detail.module').then(m => m.MovieDetailModule) }
    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
