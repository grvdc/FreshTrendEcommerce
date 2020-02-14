import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { LoadingController, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.page.html',
  styleUrls: ['./shop-page.page.scss'],
})
export class ShopPagePage implements OnInit {
  @ViewChild('IonInfiniteScroll',{ static : false }) infiniteScroll: IonInfiniteScroll;
  categoryType: any;
  productList = [];
  getResponse :boolean =false;
  oldproductsList = [];
  id:any;
  length= 7;
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public loadingController: LoadingController,
  ) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.categoryType = JSON.parse(params.special);
        console.log("Category from Home page", this.categoryType);
        this.productBycategory();
      } else {
        this.getProduct();
      }
    });
  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
   
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  async getProduct() {
    let loading = await this.loadingController.create({
      message: 'Please wait!',
    });
    await loading.present();
    this.productList = [];
    this.auth.newApi().subscribe(data_ => {
      if (data_) {
        this.getResponse = true
        loading.dismiss();
        data_['products'].map(item => {
          if (item.image && item.image.src) {
            this.productList.push(item);
            this.oldproductsList.push(item)
          }
        })
      }
    })
  }

  async productBycategory() {
    this.getResponse = false;
    let loading = await this.loadingController.create({
      message: 'Please wait!',
    });
    await loading.present();

    this.auth.getProductsByCategories(this.categoryType.category).subscribe(data_ => {
      if (data_) {
        loading.dismiss();
        this.getResponse = true;
        // this.productList = data_['products'];
        this.id = setInterval(() => this.anitest(),120);
        this.oldproductsList = data_['products'];
      }
    })
    
  }
  anitest(){
    let length = this.productList.length;
    if(this.length != length ){
      if(length < this.oldproductsList.length){
        this.productList.push(this.oldproductsList[length]);
      } else{
        clearInterval(this.id);
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
      }     
    } else{
      clearInterval(this.id);
    }       
  }

  loadData(event) {
    setTimeout(() => {
      this.length = this.length+8;
      this.id = setInterval(() => this.anitest(),210);
      event.target.complete();
      if(this.productList.length == this.oldproductsList.length){
        event.target.disabled = true;
      }
    }, 700);
  }

  productDetail(product){
    console.log("click PRoduct", product);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        productFromShopPage: JSON.stringify(product)
      }
    };
    this.router.navigate(['product-detail'], navigationExtras);
    
  }

  filterItems(ev) {
    console.log("this.oldproductsList;",this.oldproductsList)
    this.productList = this.oldproductsList;
    const searchTerm = ev.target.value;
    this.productList =  this.productList.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
    console.log("this.productList;",this.productList)
    
  }
}
