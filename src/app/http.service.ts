import { Injectable } from '@angular/core';
import {Articles} from "./lister-articles/article-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private  http: HttpClient) { }

  //recuper les articles
  getArticles(): Observable<Articles[]> {
    return this.http.get<Articles[]>('https://6261e6f0327d3896e2808a91.mockapi.io/api/v1/articles/');
  }

  //acceder a un article
  getArticleById(articleId: number): Observable<Articles> {
    return this.http.get<Articles>(`https://6261e6f0327d3896e2808a91.mockapi.io/api/v1/articles/${articleId}`);
  }

  //modifier un titre
  modifierTitre(article: Articles) {
    console.log("article :"+article);
    return this.http.patch(article?._liens?.self?.href,{titre:article.titre,description:article.description})
  }
}
