import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieRatingsComponent } from 'src/app/components/movie-ratings/movie-ratings.component';


@NgModule({
  declarations: [MovieDetailComponent, MovieRatingsComponent],
  imports: [
    CommonModule,
    MovieDetailRoutingModule
  ]
})
export class MovieDetailModule { }
