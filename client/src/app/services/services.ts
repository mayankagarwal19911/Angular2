import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class Services{
    private header = new Headers();
    constructor(private http : Http){
        this.header.append('Authorization', 'Bearer '+localStorage.getItem('token'));
    }

    /***************
    * Admin
    ************** */
    adminLogin(obj){
        return this.http.post('http://127.0.0.1:3000/auth/signin/',{'email': obj.email , 'password': obj.password}).map(response=>response.json());
    }

    /***************
    * Menu
    *************** */
    addMenu(menu){
        return this.http.post('http://127.0.0.1:3000/menus' ,{"menu" : menu}, {headers : this.header}).map(response=>response.json());
    }

    getMenu(){
        return this.http.get('http://127.0.0.1:3000/menus', {headers : this.header}).map(response=>response.json());
    }

    deleteMenu(id){
        return this.http.delete('http://127.0.0.1:3000/menus/'+id, {headers : this.header}).map(response=>response.json());
    }

    editMenu(obj){
        return this.http.put('http://127.0.0.1:3000/menus/'+obj.id ,{"menu" : obj.menuItem}, {headers : this.header}).map(response=>response.json());
    }

}