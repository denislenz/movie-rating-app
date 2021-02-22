import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-ratings',
  templateUrl: './movie-ratings.component.html',
  styleUrls: ['./movie-ratings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieRatingsComponent {

  public ratingLength = new Array(5)
  public currentRate: number = 0

  private _rate: number
  @Input() set rate(value: number) {
    this._rate = value
    this.currentRate = value
  }

  @Output() rageChange: EventEmitter<number> = new EventEmitter()

  constructor() { }

  public onHoverEnter(index: number) {
    this.currentRate = index
  }

  public onHoverLeave() {
    this.currentRate = this._rate
  }

  public emitCurrentRate() {
    this.rageChange.emit(this.currentRate)
  }
}
