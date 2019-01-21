import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.scss']
})
export class MovieThumbnailComponent implements OnInit, OnChanges {
  @Input() movie: Movie;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.movie);
    
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    
  }

  goToDetail() {
    this.router.navigate(['/movie', this.movie.id]);
  }
}