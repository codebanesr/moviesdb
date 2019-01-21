import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MovieThumbnailComponent implements OnInit {
  @Input()
  movie: Movie;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToDetail() {
    this.router.navigate(['/movie', this.movie.id]);
  }
}