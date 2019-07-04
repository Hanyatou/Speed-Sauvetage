import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  encodeData: any;
  scannedData: {}; 
  constructor(private router: Router) {
   
  }
  ngOnInit() {
  }
  login(form){
    alert(form.value);
    alert(form.value.email);
      /*this.authService.login(form.value).subscribe((res)=>{

      alert(form.value);
        //this.router.navigateByUrl('home');
      });*/
    }

}
