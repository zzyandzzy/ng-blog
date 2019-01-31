import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  text = 'page not found';
  sorry = 'We\'re sorry. The page you are looking for cannot be found.';

  constructor() {
  }

  ngOnInit() {
  }

}
