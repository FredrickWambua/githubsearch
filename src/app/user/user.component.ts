import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public githubUserQuery!: string;

  constructor() { }

  public searchUser(){
    
  }

  ngOnInit(): void {
  }

}
