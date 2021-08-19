import {  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class AuthInterceptor implements HttpInterceptor{
  intercept(req:HttpRequest<any>, next:HttpHandler){
    let modifiedReq = req.clone({headers: req.headers.append('Content-type','application/json',)})
    // console.log(modifiedReq)
    return next.handle(modifiedReq)
  }
}
