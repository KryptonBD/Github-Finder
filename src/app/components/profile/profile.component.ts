import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any[];
  username: string;

  constructor(private githubservice: GithubService) {
    // this.githubservice.getUser().subscribe(user => {
    //   this.user = user;
    //   console.log(user);
    // });
    // this.githubservice.getRepos().subscribe(repos => {
    //   this.repos = repos;
    // });
    this.user = false;

  }

  ngOnInit() {
  }

  searchUser(){
    this.githubservice.updateUser(this.username);
    this.githubservice.getUser().subscribe(user => {
      this.user = user;
    });
    this.githubservice.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

}
