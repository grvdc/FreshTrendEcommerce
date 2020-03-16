// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.page.html',
//   styleUrls: ['./signup.page.scss'],
// })
// export class SignupPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  firstName = '';
  lastName = ''
  email = '';
  password = '';
  confirmPassword ='';
  check :boolean = false;
  emailtest : boolean = false;
  constructor(
    private router: Router,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    document.addEventListener("backbutton",function(e) {
      console.log("disable back button")
    }, false);
}
  test(){
    console.log("firstName", this.firstName);
    console.log("lastName", this.lastName);
    console.log("email", this.email);
    console.log("password", this.password);
    console.log("confirmPassword", this.confirmPassword);

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

  validate(){
    this.check = true;
    let data = '';
    this.firstName = this.firstName.trim();
    this.email = this.email.trim();
    this.password = this.password.trim();
    this.confirmPassword = this.confirmPassword.trim();
    if(!this.emailvalidate()){
      data = 'Please Add Email'
      // this.presentAlert(data);
      return false;
    } else if(this.firstName === ''){
      data = 'Please Add Name'
      // this.presentAlert(data);
      return false;
    } else if(this.password === ''){
      data = 'Please Create Password'
      // this.presentAlert(data);
      return false;
    } else if(this.password !== this.confirmPassword){
      data = 'Password and Confirm not matched.'
      this.presentAlert(data);
      return false;
    } else{
      this.check = false;
      this.signUp();
    }
  }
  ngAfterContentInit(){
    
  }
  signUp(){

      this.router.navigateByUrl('/home');
      this.firstName = '';
      this.lastName = ''
      this.email = '';
      this.password = '';
      this.confirmPassword ='';
  }

  goTologinPage(){
    this.router.navigateByUrl('/login');
  }

  async presentAlert(data) {
    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: data,
      buttons: [{
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }
        ]
    });
    await alert.present();
  }
}

