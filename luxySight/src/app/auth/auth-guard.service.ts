import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(
    private router:Router,
    private authService:AuthService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):boolean|Observable<boolean>|Promise<boolean>{
    let isLogin = this.authService.login;
    this.authService.sub.subscribe(statut=>{
      isLogin = statut;
    })
    if(isLogin){
      // console.log(isLogin)
      return true;
    }else{
      this.router.navigate(['/login'])
      return false;
    }
  }
}
