import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListItemComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
