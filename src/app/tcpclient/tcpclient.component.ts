import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * GitUser
 */
interface GitUser {
  name: string;
  avatar_url: string;
}

@Component({
  selector: 'app-contactus',
  templateUrl: './tcpclient.component.html',
  styleUrls: ['./tcpclient.component.css']
})
export class tcpclientComponent implements OnInit {


  public name: string = "";

  private avatarurl: string = "";


  public get AvatarUrl() : string {
    return this.avatarurl;
  }

  public FindGitUser()
  {
    this.httpclient.get<GitUser>('https://api.github.com/users/' + this.name ).subscribe((r) => {
      console.log(r);
      this.avatarurl = r.avatar_url;
      this.name = r.name;
    } )

  }

  constructor(private httpclient: HttpClient) { 
    this.httpclient = httpclient;
  }

  ngOnInit(): void {
  }

}
