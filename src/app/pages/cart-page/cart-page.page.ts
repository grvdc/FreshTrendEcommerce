import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.page.html',
  styleUrls: ['./cart-page.page.scss'],
})
export class CartPagePage implements OnInit {

  cartItems = [];
  rate = 4;
  skeleton: boolean = true;
  totalAmount: any;

  productQuantity: any;

  login = '';
  address = [];
  clientAddress = [];
  dummyTotal = 0;
  id:any;
  animationClass= "";
  oldproductsList = [];

  // new
  qty = 1 ;
  gtotal:any;
  productPrice:any;
  constructor(
    private router: Router,
    private auth: AuthService,
  ) {

  }

  ngOnInit() {
   
  }

  ionViewWillEnter(){
    let a:any = [];
    let variants:any = [];

    if (!JSON.parse(localStorage.getItem('cartProducts'))) {

    } else {
      this.totalAmount = 0;
      a = JSON.parse(localStorage.getItem('cartProducts'));
     console.log('productPrice',a);

      // for(let i = 0; i<= a.length; i++){
      //   variants=a[i].variants;
      //   console.log('variants',variants);
      //   this.totalAmount=variants[i].price;
      // console.log('totalAmount',this.totalAmount);

      // for(let b=0; b< variants.length; b++)
      // {

      //   this.totalAmount=variants[b].price;
      //   console.log('totalAmount',this.totalAmount);

      // }

      // }
      
      a.map((item) => {
        item.variants[0].price
        this.totalAmount = this.totalAmount + parseFloat(item.variants[0].price);
      })
    }

    // localStorage.setItem('products', JSON.stringify(a));
    this.cartItems = a;
    console.log('cartItems', this.cartItems);


    // productPrice=this.cartItems.this.variants.price
    this.skeleton = false;

    // this.auth.newApi().subscribe(data_ => {
    //   if (data_) {
    //     this.skeleton = false;
    //     data_['products'].map(item => {
    //       if (item.image && item.image.src) {
    //         this.oldproductsList.push(item);
    //       }
    //     })
    //   }
    // this.cartItems=this.oldproductsList;
    // console.log(this.cartItems,'this.cartItems')
    //   console.log('odf',this.oldproductsList);
    //   this.totalAmount= this.cartItems[0]['variants'][0].price;
    //   this.gtotal = this.totalAmount;
    // })


  }
  
  addQty(){
     this.qty = this.qty + 1;
     console.log('add qty', this.totalAmount);


  }

  removeQty(){
    this.qty = this.qty - 1;
  }


  removeItemFromPage(){
    this.cartItems = [];
  }
 
  indexFinding(index) {
    this.totalAmount = 0;
    this.cartItems.splice(index, 1);
    this.cartItems.map((item) => {
      item.variants[0].price
      this.totalAmount = this.totalAmount + parseFloat(item.variants[0].price);
    })
    localStorage.setItem('cartProducts', JSON.stringify(this.cartItems));
  }
}
