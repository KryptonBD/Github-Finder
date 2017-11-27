import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id= 'YOUR_CLIENT_ID';
  private client_secret= 'YOUR_CLIENT_SECRET';
  constructor(private http: Http) {
    this.username = 'YOUR_USERNAME';
  }

  getUser(){
    return this.http.get('http://api.github.com/users/'+this.username+'?client_id'+this.client_id+'&client_secret'+this.client_secret)
      .map(res => res.json())
  }
  getRepos(){
    return this.http.get('http://api.github.com/users/'+this.username+'/repos?client_id'+this.client_id+'&client_secret'+this.client_secret)
      .map(res => res.json())
  }

  updateUser(username:string){
    this.username = username;
  }

}
