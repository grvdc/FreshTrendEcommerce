import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  imageShow :any;
  imageList = [];
  product:any;
  page: 0;
  qty=1;
  cartBadge = 0;
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public loadingController: LoadingController,
  ) { 
   
  }

  ngOnInit() {
    this.imageList = [];
   this.nn();
  }
  ionViewWillEnter() {
    this.getCartCount();
    this.page = 0;
    this.imageList = [];
    this.nn();
   
  }
nn(){
  this.route.queryParams.subscribe(params => {
    if (params && params.productFromShopPage) {
      this.product = JSON.parse(params.productFromShopPage);
      console.log("this.product.images.length",this.product.images.length)
      for(let i =0; i< this.product.images.length;i++){
        if(i < 4){
          this.imageList.push(this.product.images[i]);
          this.imageList[i]['highlighted']=false;
        }
      }
      this.highlightedOff(this.imageList[0]['src'])
    } else {
    }
  });
}
  heighlightedOnn(src) {
    this.imageShow = src;
    this.imageList.map((item) => {
      if (item.src === src) {
        item.highlighted = true;
      }
    })
  }
  highlightedOff(src) {
    console.log("imgClick", src);
    this.imageList.forEach((values) => {
      values.highlighted = false;
    });
    this.heighlightedOnn(src);
  }

  addToCart(){
    let a = [];
    if (!JSON.parse(localStorage.getItem('cartProducts'))) {
      a.push(this.product);
    } else {
      a = JSON.parse(localStorage.getItem('cartProducts'));
      a.push(this.product)
    }
    console.log('a', a);
    localStorage.setItem('cartProducts', JSON.stringify(a));
    this.cartBadge = a.length;
    this.router.navigateByUrl('/cart-page');
  }


  goCartPage(){
    this.router.navigateByUrl('/cart-page');
  }

  getCartCount(){
    let a = [];
      if (!JSON.parse(localStorage.getItem('cartProducts'))) {
        
      } else {
        a = JSON.parse(localStorage.getItem('cartProducts'));
      }
      console.log('a', a);
      localStorage.setItem('products', JSON.stringify(a));
      this.cartBadge = a.length;
  }

  wishlist(product){
    if(!product.wish){
      product.wish = true;
    } else {
      product.wish = false;
    }
    console.log("product",product)
  }

  shopPage(){
    this.router.navigateByUrl('/shop-page');
  }
}
