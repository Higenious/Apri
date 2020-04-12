import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/components/login/login.component';
import {DashboardComponent} from '../app/components/dashboard/dashboard.component';
import {PageNotFoundComponent} from '../app/components/page-not-found/page-not-found.component';
import {AuthGuardService} from '../app/guards/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate:[AuthGuardService] },
  {path : 'login', component : LoginComponent},
  {path : 'dashboard', component : DashboardComponent,canActivate:[AuthGuardService]},
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
