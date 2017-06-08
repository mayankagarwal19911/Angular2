import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( private _router : Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')===null){
      this._router.navigate(['/admin/login']);
    }
  }

}
