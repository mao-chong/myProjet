import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class NewsService{

  private butlerUrl = 'https://butler.luxurynsight.net/1/indexes/news/query';
  private tokens:any = JSON.parse(localStorage.getItem('tokens') as string);

  constructor(
    private http:HttpClient
  ){}
  getNews(body:any){
    return this.http.post(this.butlerUrl, body ,
      { headers: new HttpHeaders({
        'x-key': this.tokens['butler-user']
      })
    })
  }
}
