import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorList: string[] = [];
  invalidLoginCredentials = false;
  showValidationMessages:any;
  constructor(private apiService: ApiService,private router: Router) { }
  x:any;

  ngOnInit() { 

  }
  login(formValues:any) {
    console.log(formValues.Email+formValues.Password)
    this.apiService.LoginUser( formValues.Email, formValues.Password)
      .subscribe(
        (data) => {
          console.log(data);
          this.x=data;
          localStorage.setItem('ID',this.x.ID);
          localStorage.setItem('Username',this.x.Username);
          this.invalidLoginCredentials = false;
          this.router.navigate(['/Play-Ground']);
        },
        (error) => {
          this.errorList = [];
          const errorMessage = error['error']['message'];
          this.errorList.push(`${errorMessage}`);
        }
      );

}
}
