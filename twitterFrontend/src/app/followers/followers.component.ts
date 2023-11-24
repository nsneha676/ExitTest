import { Component, OnInit } from '@angular/core';
import{FollowersService} from './followers.service'

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  public users:any;
  constructor(private followersService:FollowersService) { }
  public Count:any;
  public ID:any;
  public loggedIn:any;
  ngOnInit() {
    this.ID=localStorage.getItem('ID');
    if(this.ID!=null){
      this.loggedIn=true;
    }
    else
    this.loggedIn=false; 
    this.followersService.getFollowers(this.ID).subscribe((data: any) => {
      
      this.users = data;
      var i=0;
      data.forEach((element:any)=> {
        i++;
      });
      this.Count=i;
  });
}

}
