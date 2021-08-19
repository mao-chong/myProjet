import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public isLogin = false;
  private tokens = localStorage.getItem('tokens');
  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  ngOnInit(){
    this.authService.sub.subscribe(isLogin=>{
      this.isLogin = isLogin;
    })

    if(this.tokens){
      this.authService.onLogin()
    }

  }

  onLogout(){
    localStorage.clear();
    this.authService.onLogout()
    this.router.navigate(['/login'])
  }
}
