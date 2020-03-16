import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  totalAmount = 0;
  cartItems: any;
  products = [];
  fade = "";
  totalItem = 0;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  gotoHome() {
    this.router.navigateByUrl('/');
  }
  
  ionViewWillEnter() {
    let a: any = [];

    if (!JSON.parse(localStorage.getItem('cartProducts'))) {

    } else {
      this.totalAmount = 0;
      a = JSON.parse(localStorage.getItem('cartProducts'));
      a.map((item) => {
        item.productQuantity = 1;
        item.itemTotal = item.productQuantity * item.variants[0].price;
        this.totalAmount = this.totalAmount + parseFloat(item.variants[0].price);
      })
      this.cartItems = a;
      this.products = this.cartItems;
      this.totalItem = this.products.length;
      console.log('this.products', this.products);
    }

  }


  goToShopPage(category) {
    // this.router.navigateByUrl('/shop-page');
    if (category) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(category)
        }
      };
      this.router.navigate(['shop-page'], navigationExtras);
    } else {
      this.router.navigateByUrl('/shop-page');
    }
  }

  productDetail(product) {
    localStorage.setItem('products', JSON.stringify(product))
    console.log("click PRoduct", product);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        productFromShopPage: JSON.stringify(product)
      }
    };
    this.router.navigate(['product-detail'], navigationExtras);

  }

  swipeLeft(event: any, index): any {
    console.log('Swipe Left', event);
  }

  swipeRight(event: any, index): any {
    console.log('Swipe Right', event);
  }



}
