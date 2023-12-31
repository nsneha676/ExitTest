import { Component, OnInit ,Output} from '@angular/core';
import {SearchService} from './search.service'
import{ApiService} from '../api.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 @Output() public parentMessage="abc";
  constructor(private searchService:SearchService,private apiservice:ApiService,private route:Router) { }
  public ID:any;
  public loggedIn:any;
  public tweets:any;
  public users:any;
  ngOnInit() {
     this.ID=localStorage.getItem('ID');
     if(this.ID!=null){
      this.loggedIn=true;
    }
    else
    this.loggedIn=false;
  }

  
  SearchUser(formValues:any){
    if(formValues.search == "posts"){
      this.ID=localStorage.getItem('ID');
      this.searchService.GetAllTags(this.ID,formValues.SearchString).subscribe((data:any)=>{
      this.tweets=data;
      this.users=null;
    })
  }
  else if(formValues.search == "people"){
    
    this.ID=localStorage.getItem('ID');
    this.searchService.GetAllUsers(this.ID,formValues.SearchString).subscribe((data:any)=>{
      this.users=data;
      this.tweets=null;
    })
  }
}
  public Follow(UsertoFollowID:string){
    var ID=localStorage.getItem('ID');
    this.apiservice.userToFollow(ID,UsertoFollowID).subscribe(data=>{
      window.location.reload();
    //  this.route.navigate['./Search']
    });
  }
    public unFollow(usertounfollowID:any){
      var ID=localStorage.getItem('ID');
      this.apiservice.userToUnfollow(ID,usertounfollowID).subscribe(data=>{
        window.location.reload();
      //  this.route.navigate['./Search']
      });
    }

}
