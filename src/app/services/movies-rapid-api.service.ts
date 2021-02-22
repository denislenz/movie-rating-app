import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { Search } from '../models/search';

@Injectable({
  providedIn: 'root'
})
export class MoviesRapidApiService {

  constructor(private httpClient: HttpClient) { }

  public getSearch(queryString: string): Promise<Search> {
    return this.httpClient.get<Search>(`${ENV.rapidapi.url}search/${queryString}`, {
      headers: ENV.rapidapi.headers
    }).toPromise()
  }

  public getFilm(queryString: string): Promise<Movie> {
    return this.httpClient.get<Movie>(`${ENV.rapidapi.url}film/${queryString}`, {
      headers: ENV.rapidapi.headers
    }).toPromise()
  }
}
