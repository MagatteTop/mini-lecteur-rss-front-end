import {Component, Input, OnInit} from '@angular/core';
import {Articles} from "./article-model";
import {Observable} from "rxjs";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-lister-articles',
  templateUrl: './lister-articles.component.html',
  styleUrls: ['./lister-articles.component.css']
})
export class ListerArticlesComponent implements OnInit {
  articles$!:Observable<Articles[]>;
  @Input() article!: Articles;
  totalCount!:number;

  constructor(private articlesService: HttpService) { }

  ngOnInit(): void {
    this.articles$ = this.articlesService.getArticles();
  }
  // ...modifier article
  modifierArticle(articleId: number) {
    console.log("update ok"+articleId);
  }

  //pagination


}
