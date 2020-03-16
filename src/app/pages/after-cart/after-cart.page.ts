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
  infoSection :boolean = false;
  shippingAddressSection :boolean =false;
  paymentSection :boolean = false;
  check :boolean = false;
  emailtest: boolean = false;
  shipMethod = '';
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
  dform = {
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

  creditCard={
    cardNumber:'',
    name:'',
    expiry:'',
    cvv:'',

  }

  mcheck :boolean = false;
  mobile = '';
  // creditCard = '';
  differentAddress='';
  rememberMe:boolean = false;
  dcheck:boolean = false;
  creditCardCheck :boolean = false;
  radioSelectPayment = '';
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    let _ = this;
    console.log('vm',_.infoSection);
    this.infoSection = true;
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
      this.infoSection = false;
      this.shippingAddressSection = true;
    } else{
      console.log("testing Stuck");

    }
  }

  toInfo(){
    this.infoSection = true;
    this.shippingAddressSection = false;
    this.paymentSection = false;
  }
  // else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)){
  //   return false; 
  // }
  ionViewDidEnter() {
    document.addEventListener("backbutton",function(e) {
      console.log("disable back button")
    }, false);
}
  toShip(){
    this.infoSection = false;
    this.shippingAddressSection = true;
    this.paymentSection = false;
  }
  toPayment(){
    this.infoSection = false;
    this.shippingAddressSection = false;
    this.paymentSection = true;
  }

  validateDifferent(){

    if(this.differentAddress == 'different'){
      this.dcheck  = true;
      if(this.dform.fName == ''){
        return false;
      } else if(this.dform.lName == ''){
        return false;
      }else if(this.dform.address == ''){
        return false;
      }else if(this.dform.city == ''){
        return false;
      }else if(this.dform.country == ''){
        return false;
      }else if(this.dform.pin == ''){
        return false;
      }else if(this.dform.state == ''){
        return false;
      } else {
        this.dcheck = false;
        return true;
      }
    } 

    if(this.rememberMe){
      this.mcheck = true;
    } else{
      this.mcheck = false;
    }
    
    if(this.radioSelectPayment === 'creditCard'){
      this.creditCardCheck = true;
      if(this.creditCard.cardNumber == ''){
        return false;
      } else if(this.creditCard.name == ''){
        return false;
      }else if(this.creditCard.expiry == ''){
        return false;
      } else if(this.creditCard.cvv == ''){
        return false;
      } else{
          this.creditCardCheck = false;
      }
    } else{
      this.creditCardCheck = false;
    }

    if(!this.creditCardCheck && !this.dcheck){
      this.router.navigateByUrl('/order-success');
    }
  }
  
}
