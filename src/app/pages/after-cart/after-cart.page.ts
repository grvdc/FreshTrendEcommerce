import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-cart',
  templateUrl: './after-cart.page.html',
  styleUrls: ['./after-cart.page.scss'],
})
export class AfterCartPage implements OnInit {
  show : boolean = false;
  totalAmount:any;
  cartItems = [];
  height : any;
  check :boolean = false;
  emailtest: boolean = false;
  form = {
    email: '',
    fName  : '',
    lName  : '',
    company : '',
    address : '',
    appartment : '',
    city : '',
    country: '',
    state : '',
    pin: '',
    mobile : '',
  }


  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  toggle(){
    this.show = !this.show;
  }

  ionViewWillEnter(){
    let a:any = [];

    if (!JSON.parse(localStorage.getItem('cartProducts'))) {

    } else {
      this.totalAmount = 0;
      a = JSON.parse(localStorage.getItem('cartProducts'));
      a.map((item) => {
        this.totalAmount = this.totalAmount + item.itemTotal;
      })
    }
    this.cartItems = a;
    this.height = ((this.cartItems.length * 72)+248) + 'px';
    console.log('cartItems', this.cartItems);

  }

  gotoHome(){
    this.router.navigateByUrl('/');
  }

  cartPage(){
    this.router.navigateByUrl('/cart-page');
  }


  recheck(){
    console.log("Fname", this.form);
    this.check = true;
    this.form.fName = this.form.fName.trim();
    if(!this.emailvalidate()){
      this.emailtest = true;
      return false;
    }
    if(this.form.fName == ''){
      return false;
    } else if(this.form.lName == ''){
      return false;
    }else if(this.form.address == ''){
      return false;
    }else if(this.form.city == ''){
      return false;
    }else if(this.form.country == ''){
      return false;
    }else if(this.form.pin == ''){
      return false;
    }else if(this.form.state == ''){
      return false;
    } else {
      this.check = false;
      return true;
    }
  }

  emailvalidate(){
    console.log('keypress');
    if(this.form.email == ''){
      this.emailtest = true;
      // return false;
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)){
      console.log("inside the Email validation");
      this.emailtest = true;
      // return false;
    } else {
      this.emailtest = false;
      return true;
    }
  }
  validate(){
    if(this.recheck()){
      console.log("testing Clear");
    } else{
      console.log("testing Stuck");

    }
  }

  // else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)){
  //   return false;
  // }
  
}
