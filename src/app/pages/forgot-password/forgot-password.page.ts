import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email = '';
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
        this.check = false;
        this.router.navigate(['home']);
      }
    
    }

    gotoHome(){
      this.router.navigate(['home']);

    }

    goLogin(){
      this.router.navigate(['login']);

    }
    
    

}
