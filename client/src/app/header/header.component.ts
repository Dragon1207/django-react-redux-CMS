import { Component } from '@angular/core';

@Component({
  selector: 'djudo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  routeToGitHub() {
    window.open('https://github.com/rafay826/Djudo','_blank');
  }
}
