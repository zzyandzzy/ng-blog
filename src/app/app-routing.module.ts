import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ArchivesComponent} from './archives/archives.component';
import {LinksComponent} from './links/links.component';
import {IndexComponent} from './index/index.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SearchComponent} from './search/search.component';
import {ArticleComponent} from './article/article.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'page/:id', component: IndexComponent},
  {path: 'about', component: AboutComponent},
  {path: 'archives', component: ArchivesComponent},
  {path: 'links', component: LinksComponent},
  {path: 'search', component: SearchComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
