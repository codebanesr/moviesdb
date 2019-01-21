import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  searchTerm: string = "";
  foundSessions: any;
  ngOnInit() {
  }


  searchMovies(searchTerm) {
    this.moviesService.searchMovies(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      })
  } 

}
