import {Routes, RouterModule, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Services } from '../../services/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [Services]
})
export class LoginComponent implements OnInit {
  private email : String = "";
  private password : String = "";
  private loginObj : Object = {};
  private loginError : String = "Invalid username/password !";
  private showLoginError : boolean = false;

  constructor( private httpService : Services, private _router : Router ) { }

  ngOnInit() {
  }

  login(){
    this.loginObj = {
      'email' : this.email,
      'password' : this.password
    }
    this.httpService.adminLogin(this.loginObj).subscribe(response=>{
      localStorage.setItem('token', response.data.token);
      this._router.navigate(['admin/dashboard']);

    }, error=>{
          if(error.status===401){
            this.showLoginError = true;
            this._router.navigate(['admin/login']);
          }
          else{
            alert("Something went wrong !");
          }
    })
  }

} 
