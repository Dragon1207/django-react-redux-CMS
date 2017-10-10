import {Routes} from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {HomeComponent} from '@app/home/home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'posts', component: PostListComponent },
    { path: '**', redirectTo: '', component: HomeComponent }
]
