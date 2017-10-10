import { Component } from '@angular/core';
import { PostsService } from '@app/shared/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './djudo.component.html',
  styleUrls: ['./djudo.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private PostsService: PostsService) { }
}
