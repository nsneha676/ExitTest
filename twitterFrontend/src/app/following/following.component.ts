import { Component, OnInit } from '@angular/core';
import {FollowingService} from './following.service';
import {ApiService} from '../api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  public following:any;
  public Count:any;
  public loggedIn:any;
  constructor(private followingService:FollowingService,private apiservice:ApiService,private route:Router) { }

  ngOnInit() {
    
    var userId=localStorage.getItem('ID');
    if(userId!=null){
      this.loggedIn=true
    }
    else this.loggedIn=false;
    this.followingService.getFollowing(userId).subscribe((data:any)=>{

      this.following=data;
      var i=0;
      data.forEach((element:any) => {
        i++;
      });
      this.Count=i;

    });
  }
  public unFollow(usertounfollowID: any){
    var ID=localStorage.getItem('ID');
    this.apiservice.userToUnfollow(ID,usertounfollowID).subscribe(data=>{
      window.location.reload();
     // this.route.navigate['./Following']
    });
    }

}
