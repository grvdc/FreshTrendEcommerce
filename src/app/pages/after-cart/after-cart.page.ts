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
    this.height = ((this.cartItems.length * 80)+258) + 'px';
    console.log('cartItems', this.cartItems);

  }

  gotoHome(){
    this.router.navigateByUrl('/');
  }

  cartPage(){
    this.router.navigateByUrl('/cart-page');
  }
  
}
