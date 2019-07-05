import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class RemoteServiceService {
	getApiUrl : string= "https://apibarcode.glitch.me/";

  constructor(private http:HttpClient) {
 
   }

 /* getPosts() {

    return  this.http.get(this.getApiUrl).map(res => res.json()).subscribe(data => {

        console.log(data);

    });

   }*/
    	
}
