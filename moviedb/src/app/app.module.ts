import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {FormsModule} from '@angular/forms';
import { CastListComponent } from './cast/cast-list/cast-list.component'

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavbarComponent,
    MovieThumbnailComponent,
    MovieDetailComponent,
    CastListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
