import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cast-thumbnail',
  templateUrl: './cast-thumbnail.component.html',
  styleUrls: ['./cast-thumbnail.component.css']
})
export class CastThumbnailComponent implements OnInit {

  constructor() { }

  @Input() actor
  ngOnInit() {
  }

}
