import { Component, OnInit } from '@angular/core';
import { homeConfig } from '@app/home/home.config';
import { HomeConfig } from './home';

@Component({
  selector: 'djudo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  config: HomeConfig;

  constructor() { }

  ngOnInit() {
    this.config = homeConfig;
  }

}
