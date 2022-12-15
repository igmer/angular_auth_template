import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./components/guard/auth.guard";

const routes: Routes = [
{ path: 'home'    , component: HomeComponent , canActivate: [ AuthGuard ]  },
{ path: 'login'   , component: LoginComponent },
{ path: '**', redirectTo: 'login' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
