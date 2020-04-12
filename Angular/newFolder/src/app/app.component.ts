import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../app/guards/auth-guard.service';
import {AdminService} from '../app/services/admin.service';
import { Router } from '@angular/router';
import {User} from '../app/models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  currentUser: User;
  title = 'Admin-webportal';
  
  constructor(private AdminService: AdminService, private router: Router) {
    this.AdminService.currentUser.subscribe(x => this.currentUser = x);
    console.log('value of current user');
        
  }

  ngOnInit() {

  }

  logout() {
    console.log('logout called');
    this.AdminService.logout();
    this.router.navigate(['/login']);
  }
}

