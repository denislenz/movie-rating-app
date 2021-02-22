import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';
import { MoviesRapidApiService } from 'src/app/services/movies-rapid-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public movie: Movie

  public readonly RATING: typeof Rating = Rating

  public ratings: {} = {}

  constructor(
    private route: ActivatedRoute,
    private moviesRapidApiService: MoviesRapidApiService
  ) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id')

    this.moviesRapidApiService.getFilm(movieId)
      .then((movie) => {
        this.movie = movie
        this.initRating()
      })
  }

  private initRating(): void {
    Object.values(Rating).forEach((rating: string) => {
      const rate = localStorage.getItem(`movie-${this.movie.id}__rating-${rating}`)
      this.ratings[rating] = parseInt(rate)
    })
  }

  public changeRate(rating: Rating, value: number): void {
    this.ratings[rating] = value
    localStorage.setItem(`movie-${this.movie.id}__rating-${rating}`, value.toString())
  }

}
