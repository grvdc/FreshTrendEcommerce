import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password='';
  emailtest :boolean= false;
  check:boolean = false;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }


  emailvalidate(){
    if(this.email == ''){
      this.emailtest = true;
      // return false;
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)){
      console.log("inside the Email validation");
      this.emailtest = true;
      // return false;
    } else {
      this.emailtest = false;
      return true;
    }
  }
  ionViewDidEnter() {
    document.addEventListener("backbutton",function(e) {
      console.log("disable back button")
    }, false);
}
  login(){
    this.check = true;
    
    if(!this.emailvalidate() ){
      this.emailtest = true;
      return false;
    } else{
      if(this.password == ''){
        this.check = true;
      } else{
        this.check = false;
        this.router.navigateByUrl('/');
      }
    
    }

    
    
  }
  signup(){
    this.router.navigateByUrl('/signup');
  }
  gotoHome(){
    this.router.navigateByUrl('/');
  }

  toForgotPassword(){
    this.router.navigateByUrl('/forgot-password');
  }


  
}
