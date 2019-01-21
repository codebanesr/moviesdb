import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }



  // write an interface for this 
  movies: any[] = []
  ngOnInit() {
    this.moviesService.getMovieList().subscribe((movies: any)=>{
      console.log(movies)
      this.movies = movies;
    })
  }
}
