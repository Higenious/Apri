import { Injectable } from '@angular/core';
import {HttpClient } from  '@angular/common/http';
import { map, filter, scan, catchError } from 'rxjs/operators';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {User} from  '../models/user';

@Injectable({
  providedIn: 'root'
})


export class AdminService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    console.log('user of current  session', this.currentUser);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
    console.log('console',this.currentUser);
  }


  login(admin) {
    return this.httpClient.post<any>('http://localhost:5000/api/v1/singIn',{email : admin.email, password : admin.password})
    .pipe(map(user => {
      console.log('user service', user);
       var final = JSON.stringify(user);
       var nice = JSON.parse(final);
       console.log('final', final);
       if(nice.data){
         const token = nice.data[0].token;
         const username = nice.data[0].full_name;
         if (final && token) {
           localStorage.setItem('currentUser', JSON.stringify(username));
         }         
       }else{
        console.log('enterred id is not present');
       }
            return final;
     }));
}


logout() {
  localStorage.clear();
  this.currentUserSubject.next(null);
}


getAll(id){
  return this.httpClient.get('http://localhost:5000/api/v1/getalldepartment/'+id);
}

 }
