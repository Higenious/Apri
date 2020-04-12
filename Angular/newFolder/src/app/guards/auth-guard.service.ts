import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import {AdminService} from '../services/admin.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardService {
  constructor(
    private router: Router,
    private authenticationService: AdminService
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
        console.log('current user is', currentUser);
        // authorised so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
}
}
