import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from './movie-list.component';
import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListItemComponent } from 'src/app/components/movie-list-item/movie-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MovieListComponent, MovieListItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MovieListRoutingModule
  ]
})
export class MovieListModule { }
