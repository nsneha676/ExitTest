import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '.././environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  RegisterUser(FirstName: any, LastName: any, Email: any, Password: any, Country: any,PhoneNumber: any,Image:any ) {
    
    
    //testing
    
    const userRegistrationObject = Object.assign({}, {FirstName, LastName, Email, Password, Country,PhoneNumber,Image});
    return this.http.post<any>(`${environment.apiUrl}/user`, userRegistrationObject);
  }
  LoginUser( Email: any, Password: any) {
    const userRegistrationObject = Object.assign({}, { Email, Password});
    return this.http.post<any>(`${environment.apiUrl}/login`, userRegistrationObject);
  }

  userToFollow(UserID:any,UserToFollowID:any){
    const userRegistrationObject = Object.assign({}, { UserID,UserToFollowID});
    return this.http.post<any>(`${environment.apiUrl}/user/follow`, userRegistrationObject);
  }

  userToUnfollow(UserID:any,UserToFollowID:any){
    const userRegistrationObject = Object.assign({}, { UserID,UserToFollowID});
    return this.http.post<any>(`${environment.apiUrl}/user/unfollow`, userRegistrationObject);
  }

  LikeTweet(LoggedInUserID:any,TweetID:any){
    const LikeObject = Object.assign({}, { LoggedInUserID,TweetID});
    return this.http.post<any>(`${environment.apiUrl}/user/like`, LikeObject);

  }
  DislikeTweet(UserID:any,TweetID:any){
    return this.http.delete<any>(`${environment.apiUrl}/user/dislike/${UserID}/${TweetID}`);
  }
}
