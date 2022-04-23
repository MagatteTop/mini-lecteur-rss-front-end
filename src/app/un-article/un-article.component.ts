import { Component, OnInit } from '@angular/core';
import {Articles} from "../article-model";
import {Observable} from "rxjs";
import {HttpService} from "../http.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-un-article',
  templateUrl: './un-article.component.html',
  styleUrls: ['./un-article.component.css']
})
export class UnArticleComponent implements OnInit {
  article!: Articles;
  article$!: Observable<Articles>;
  constructor(private articleService: HttpService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const articleId = +this.route.snapshot.params['id'];
    this.article$ = this.articleService.getArticleById(articleId);
  }


}
