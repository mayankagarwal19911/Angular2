import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private _router : Router ) {
    localStorage.setItem('token', null);
    this._router.navigate(['admin/login']);
   }

  ngOnInit() {
  }

}
