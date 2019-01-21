import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';
import { Observable, of, from } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getMovieList(): Observable<Movie[]> {
    return from(Array(MOVIES));
  }


  getMovies(): Observable<Movie[]> {
    return this.http.get<any>(`${this.URL}/movies`).pipe(
      tap((product) => console.log(`returning all movies`)),
      catchError(this.handleError<any>('getMovies'))
    );
  }
  

  getMovie(id: Number): Observable<Movie> {
    return this.http
      .get(`${this.URL}/movies/${id}`)
      .pipe(
        tap((movie: Movie) => console.log(`returning movie with id ${id}`)),
        catchError(this.handleError<any>('getMovies'))
      );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
