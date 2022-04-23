import {Component, Input} from '@angular/core';
import {Articles} from "./article-model";
import {HttpService} from "./http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() article!: Articles;

  title = 'lecteur';

  constructor(private articlesService: HttpService, private router: Router) { }

}
