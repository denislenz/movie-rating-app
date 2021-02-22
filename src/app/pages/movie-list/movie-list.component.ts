import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { Title } from '../../models/search';

import { debounceTime } from 'rxjs/operators';
import { MoviesRapidApiService } from 'src/app/services/movies-rapid-api.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  public queryStringControl: FormControl
  public titles: Title[]
  public isLoading: boolean = false

  private _queryString$: Subscription

  constructor(
    private moviesRapidApiService: MoviesRapidApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.queryStringControl = new FormControl();

    this.initQueryStringSearch()

    const queryString = this.route.snapshot.queryParamMap.get('q')
    if (queryString) this.queryStringControl.setValue(queryString)
  }

  ngOnDestroy() {
    this._queryString$.unsubscribe()
  }

  private initQueryStringSearch(): void {
    this._queryString$ = this.queryStringControl.valueChanges.pipe(
      debounceTime(750)
    ).subscribe(value => {

      this.isLoading = true
      this.moviesRapidApiService.getSearch(value || '')
        .then(({ titles }) => this.titles = titles)
        .catch(() => this.titles = [])
        .finally(() => this.isLoading = false)

      this.router.navigate(['movies'], {
        replaceUrl: true, queryParams: { q: value }
      })

    })
  }

  public trackById(index: number, { id }: Movie): string {
    return id;
  }

  public openTitle(id: string): Promise<boolean> {
    return this.router.navigate(['movies', id])
  }

}
