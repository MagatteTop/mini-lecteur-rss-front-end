import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListerArticlesComponent } from './lister-articles/lister-articles.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule } from "@angular/common/http";
import { UnArticleComponent } from './un-article/un-article.component';

import { MatSliderModule } from "@angular/material/slider";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    ListerArticlesComponent,
    UnArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      { path: 'articles', component: ListerArticlesComponent},
      { path: 'articles/:id', component: UnArticleComponent},
      { path: '', component: ListerArticlesComponent},

    ]),  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
