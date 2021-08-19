import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

import { User } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  private magicaUrl = 'https://magica.luxurynsight.net/1/users/login';
  constructor(
    private http:HttpClient,
    private authService:AuthService,
    private router:Router
  ){}

  onLogin(userInfo:User){
    console.log(userInfo);
    this.http.post(this.magicaUrl, userInfo).subscribe((userInfo:any)=>{
      const tokens = userInfo.response.tokens
      localStorage.setItem('tokens',JSON.stringify(tokens))

      this.authService.onLogin();
      this.router.navigate(['/news'])
    },
    (err)=>{
      console.log(err)
    }
    )
  }
}
