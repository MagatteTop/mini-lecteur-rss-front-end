import { Injectable } from '@angular/core';
import {Articles} from "./article-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private  http: HttpClient) { }

  //recuper les articles
  getArticles(): Observable<Articles[]> {
    return this.http.get<Articles[]>('http://localhost:8000/api/articles.json?page=1');
  }

  //acceder a un article
  getArticleById(articleId: number): Observable<Articles> {
    return this.http.get<Articles>(`http://localhost:8000/api/articles.json?page=1/${articleId}`);
  }

  //modifier un titre
  modifierTitre(article: Articles) {
    console.log("article :"+article);
    return this.http.patch(article?._liens?.self?.href,{titre:article.titre,description:article.description})
  }
}
