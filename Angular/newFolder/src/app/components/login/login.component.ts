import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import swal from 'sweetalert';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  user: any = {};
  constructor(private AdminService :AdminService,private router: Router) {console.log('Login Components'); }

  ngOnInit() {
  }

  loginUser(user){
    this.AdminService.login(user)
    .pipe(first())
    .subscribe(
      data => {
        console.log('data are ', data);
        var nice = JSON.parse(data);
         let tok = nice.data[0].isVerified;
         let _id =  nice.data[0]._id;
          localStorage.setItem('_id',_id);
          let token = nice.data[0].token;
          sessionStorage.setItem("token",token);
          swal("Congratulations!", "You logged In succcessfully!", "success").then(()=>{
          this.clearInputField();
          this.router.navigate(['/dashboard']);
          })     
      },
      error => {
        console.log('errr', error);
        swal("Incorrect username or password!", " please try again!", "error");
        this.clearInputField();
      });
  }

   clearInputField() {
    this.user.email = undefined;
    this.user.password = undefined;
  }
}



