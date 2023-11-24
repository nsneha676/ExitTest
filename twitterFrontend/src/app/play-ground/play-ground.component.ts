import { Component, OnInit } from '@angular/core';
import { PlaygroundService } from './playground.service'
import { Router } from '@angular/router'
import { DOCUMENT } from '@angular/common';
import{ApiService} from '../api.service';



@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css']
})
export class PlayGroundComponent implements OnInit {
  errorList: string[] = [];
  showValidationMessages: any;
  public selected: any;



  constructor(private playgroundService: PlaygroundService, private router: Router,private apiservice:ApiService) { }

  ngOnInit() {
    var modal = <HTMLModElement>document.querySelector('#myModal');

    // Get the button that opens the modal
    var btn = <HTMLButtonElement>document.querySelector("#myBtn");

    // Get the <span> element that closes the modal
    var span = <HTMLSpanElement>document.querySelector("#close");

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
      modal.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    span.onclick = function () {
      modal.style.display = "none";
    }
    var id = localStorage.getItem('ID');
    var img=localStorage.getItem('img')
    console.log('image name '+img)
    this.playgroundService.getAllTweets(id).subscribe((data: any) => {
      console.log(data);
      this.selected = data;
      console.log(this.selected);
      //this.saveTweets(data);
    });

  }




  // saveTweets(Tweets){

  //   console.log(this.selected);
  // }

  newTweet(formValues:any) {
    var id = localStorage.getItem('ID');
    this.playgroundService.composeTweet(id, formValues.Message)
      .subscribe(

        (data) => {
          window.location.reload();
          this.router.navigate(['/dashboard']);
         // this.router.navigate(['/dashboard']);
        },
        (error) => {
          this.errorList = [];
          const errorMessage = error['error']['message'];
          this.errorList.push(`${errorMessage}`);
        }
      )
      window.location.reload();
      this.router.navigate(['/Play-Ground']);;
  }

  
  editTweet(formValues:any) {

    
    var id = localStorage.getItem('ID');
    var TweetID=this.UpdatedMessageID;
    this.playgroundService.editTweet(id, formValues.UpdatedMessage, TweetID).subscribe((status: Object) => {
      window.location.reload();
      this.router.navigate(['/Play-Ground']);
    });
  }

  deleteTweet(TweetID:any){
    var id=localStorage.getItem('ID'); 
    this.playgroundService.deleteTweet(id,TweetID) .subscribe(

      (data) => {
        window.location.reload();
        this.router.navigate(['/Play-Ground']);
          });
  }
  
  LikeTweet(TweetID:String){
    var id =localStorage.getItem('ID'); 
    this.apiservice.LikeTweet(id,TweetID) .subscribe(

      (data) => {
        window.location.reload();
        this.router.navigate(['/Play-Ground']);
          });
  }


  DislikeTweet(TweetID:String){
    var id=localStorage.getItem('ID'); 
    this.apiservice.DislikeTweet(id,TweetID) .subscribe(

      (data) => {
        window.location.reload();
        this.router.navigate(['/Play-Ground']);
          });
  }
  
  public UpdatedMessageID:any;


  openPopup(tweet:any) {
    var modal = <HTMLModElement>document.querySelector('#myModal2');
    // Get the button that opens the modal
    

    var span = <HTMLSpanElement>document.querySelector("#close2");

    var UpdatedMessageID= document.getElementById("UpdatedMessageID") as HTMLInputElement;
     UpdatedMessageID.value=tweet.TweetID;
    
    this.UpdatedMessageID=tweet.TweetID;
    
    var UpdatedMessage=document.getElementById("UpdatedMessage") as HTMLInputElement;
    UpdatedMessage.value=tweet.Message;
     

    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    span.onclick = function () {

      modal.style.display = "none";
    }
  }
}


