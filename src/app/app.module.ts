import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AboutComponent} from './about/about.component';
import {LinksComponent} from './links/links.component';
import {ArchivesComponent} from './archives/archives.component';
import {IndexComponent} from './index/index.component';
import {BottombarComponent} from './bottombar/bottombar.component';
import {CommentComponent} from './comment/comment.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SearchComponent} from './search/search.component';
import {CardComponent} from './card/card.component';
import {ListNavigatorComponent} from './list-navigator/list-navigator.component';
import {PostComponent} from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    LinksComponent,
    ArchivesComponent,
    IndexComponent,
    BottombarComponent,
    CommentComponent,
    PageNotFoundComponent,
    SearchComponent,
    CardComponent,
    ListNavigatorComponent,
    PostComponent,
    PostListItemComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
