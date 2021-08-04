// import { Irepository } from './../interfaces/repository';
import { Iuser } from './../interfaces/user';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiKey = environment.apiKey
  userUrl = 'https://api.github.com/users/'
  urlRepo = 'https://api.github.com/users/FredrickWambua/repos/'

  constructor(private http:HttpClient) { }

  getUser(userName: String):  Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this.userUrl + userName)
  }
}