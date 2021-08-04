import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string ='FredrickWambua';
  user: any=[]
  repos: any=[];
  errorMsg: string;

  constructor(private userservice: UserService, private http:HttpClient) { }

  

  ngOnInit(): void {
    
  }
  public getUsers(event) {
    let promise = new Promise((resolve:any , reject) => {
    this.userservice.getUser (this.userName).toPromise().then(response => {
      this.user = response;
       resolve();
     },

     error => {
       this.errorMsg = 'Error encountered';
       reject(error)
     }
   );
   });
   return promise;
 }
  getProfile(userName){
    this.userservice.getUser(this.userName).subscribe(data =>{
      this.user = data
    })
  
  }
}