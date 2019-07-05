import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
 import 'rxjs/add/operator/map';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  encodeData: any;
  scannedData: {}; 
  postList:any;
  getApiUrls : string = "https://apibarcode.glitch.me";

  constructor(private router: Router, public http: Http) {
    
  }

  getPosts(){
  console.log("start");
  var json:any;
       
    }
  ngOnInit() {
  }
  login(form){
  
    this.http.get('this.getApiUrls')!
    .map(res => res.json()).subscribe(data => {
        this.postList = data.data.data;

    });
         }

}
