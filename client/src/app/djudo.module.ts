import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {appRoutes} from './djudo.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCER, META_REDUCERS } from '@app/state';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MaterialModule } from '@app/shared/material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './djudo.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostsService } from '@app/shared/post.service';
import { PostEffects } from '@app/state/posts/post.effects';
import { API_URL } from './djudo.token';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCER, {
      metaReducers: META_REDUCERS,
    }),
    FlexLayoutModule,
    EffectsModule.forRoot([PostEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 5 }) : [],
  ],
  providers: [
    PostsService,
    { provide: API_URL, useValue: 'http://localhost:8000/api' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
