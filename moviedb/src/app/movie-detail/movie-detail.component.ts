import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  isLoaded = false;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.movie = new Movie;
    this.route.params.pipe(switchMap((params: Params) => {
      return this.movieService.getMovie(+params['id']);
    })).subscribe(movie => {
      this.movie = movie;
      if (!movie) {
        alert('movie not found');
        return;
      }
      this.isLoaded = true;
    })
  }
}
