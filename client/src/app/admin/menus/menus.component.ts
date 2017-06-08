import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { Services } from '../../services/services';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css'],
  providers: [Services]
})

export class MenusComponent implements OnInit {
  private menu  : String;
  private menuList : any = [];
  private showEdit : boolean = false;
  private totalLength : any = 0;
  private pagination : any = 0;
  private pagePrefix : any = 1;
  private pageSuffix : any = "";
  private disable : boolean = true;

  constructor( private httpService : Services ) { 
    //  this.next(5);
  }

  ngOnInit() {
    this.refresh();
  }

  add(){
    if(this.menu!==null && this.menu!==undefined){
        this.httpService.addMenu(this.menu).subscribe((response)=>{
        this.refresh();
      })
    }
    else{
      alert("please enter some value");
    }
  }

  refresh(){
    this.httpService.getMenu().subscribe((response)=>{
      this.menuList = response.data;
      this.menu = null;
      this.totalLength = this.menuList.length;
    })
  }

  show(index){
      if(this.showEdit){
      this.showEdit = false;
    }
    else{
      this.showEdit = true;
    }
  }
  
  edit(index, id){  
     var obj = {};
      obj = {
        id : id,
        menuItem : this.menuList[index].menu
      }
      this.httpService.editMenu(obj).subscribe((response=>{
        this.showEdit = false;
        this.refresh();
      }))  
      obj = {}
  }

  delete(id){
    this.httpService.deleteMenu(id).subscribe((response)=>{
      this.refresh();
    })
     this.refresh();
  }

  previous(){

    alert("previous");
  }
  
  next(count){
   
  }
}
