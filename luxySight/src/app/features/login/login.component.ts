import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { LoginService } from "./login.service";

@Component({
  templateUrl:'./login.component.html',
  selector:'app-login',
  styleUrls:['./login.component.scss']
})

export class LoginComponent implements OnInit{
  constructor(
    private loginService:LoginService,
  ){}



  ngOnInit(){

  }

  login(form:NgForm){
    this.loginService.onLogin({email:form.value.email, password: form.value.password})
 }




//   fetch(`${magicaUrl}users/login`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//       email: email,
//       password: password
//     })
//   }).then((response) => {
//     if (response.status !== 200) {
//       showError(`HTTP Error ${response.status}!`);
//       return;
//     }

//     return response.json();
//   }, () => {
//     showError('Network or server error!');
//   }).then((jsonData) => {
//     if (!jsonData) {
//       return;
//     }
//     if (!jsonData.response || !jsonData.response.tokens) {
//       showError('Wrong server response!');
//       console.log(jsonData);
//       return;
//     }

//     console.log('Login done!');
//     localStorage.setItem('luxurynsightSession', JSON.stringify(jsonData.response));
//     showLoggedPage(jsonData.response.tokens);
//   });
// };
}
