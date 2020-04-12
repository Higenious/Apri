import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AdminService} from '../../services/admin.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private HttpClient :HttpClient, private AdminService : AdminService) {console.log('Dashboard Components') }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    let _id = localStorage.getItem('_id');
    this.AdminService.getAll(_id).subscribe((response)=>{
      console.log('respose is ', response)
    });
 }
}