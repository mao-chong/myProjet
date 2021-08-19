import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './features/login/login.component';
import { NewsComponent } from './features/news/news.component';

const routes: Routes = [
  {path:'', redirectTo:'news', pathMatch:'full'},
  {path:'news', component:NewsComponent ,canActivate:[AuthGuard]},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
