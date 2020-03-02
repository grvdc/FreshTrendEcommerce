import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';

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
  totalprice:any = 0;
  constructor(
    private router: Router,
    private auth: AuthService,
    public alertController: AlertController,
  ) {

  }

  ngOnInit() {
   
  }

  ionViewWillEnter(){
    let a:any = [];

    if (!JSON.parse(localStorage.getItem('cartProducts'))) {

    } else {
      this.totalAmount = 0;
      a = JSON.parse(localStorage.getItem('cartProducts'));
      a.map((item) => {
        item.productQuantity = 1;
        item.itemTotal = item.productQuantity * item.variants[0].price;
        this.totalAmount = this.totalAmount + parseFloat(item.variants[0].price);
      })
    }
    this.cartItems = a;
    console.log('cartItems', this.cartItems);
    this.skeleton = false;

  }
  
  addQty(item,i){
    let newamt = 0;
    let float =  parseFloat(item.variants[0].price);
    this.totalAmount = this.totalAmount - (item.productQuantity * float);
    item.productQuantity =  item.productQuantity + 1;
   
    newamt =  item.productQuantity * float;
    
    this.totalAmount = this.totalAmount + newamt;
    item.itemTotal = item.productQuantity * item.variants[0].price;
    console.log("cartItems", this.cartItems);

  }

  async removeQty(item, i){
    let newamt = 0;
    let float =  parseFloat(item.variants[0].price);
    
    if (item.productQuantity != 1){
      this.totalAmount = this.totalAmount - (item.productQuantity * float);
      item.productQuantity =  item.productQuantity - 1;
      newamt =  item.productQuantity * float;
      this.totalAmount = this.totalAmount + newamt;
    } else{
     
        const alert = await this.alertController.create({
          header: 'Confirm!',
          message: 'Oops! you can\'t choose the quantity less than 1 if you want then you have to delete this item ',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Okay',
              handler: () => {
                this.totalAmount = this.totalAmount -  float;

                this.totalAmount = this.totalAmount - (item.productQuantity * float);
                this.indexFinding(i);
                console.log('Confirm Okay');
              }
            }
          ]
        });
    
         alert.present();
       }
       item.itemTotal = item.productQuantity * item.variants[0].price;

       console.log("cartItems", this.cartItems);
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

  checkout(){
    localStorage.setItem('cartProducts', JSON.stringify(this.cartItems));
    this.router.navigateByUrl('/after-cart');
  }

  gotoHome(){
    this.router.navigateByUrl('/');
  }
}
