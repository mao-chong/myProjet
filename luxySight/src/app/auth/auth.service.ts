import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  public login = false;

  public sub = new Subject<boolean>();

  onLogin(){
    this.login = true;
    this.sub.next(this.login);
  }
  onLogout(){
    this.login =false;
    this.sub.next(this.login);
  }



}
