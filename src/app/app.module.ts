import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListerArticlesComponent } from './lister-articles/lister-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListerArticlesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
