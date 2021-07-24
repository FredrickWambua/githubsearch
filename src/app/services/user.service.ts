import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private base_url_user_search:string = "https://api.github.com/users/";
  private userQuery:string = "FredrickWambua";
  private reqUrl: string = this.base_url_user_search + this.userQuery +'/'

  constructor() { }
}
