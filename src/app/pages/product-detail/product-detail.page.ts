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
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public loadingController: LoadingController,
  ) { 
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

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.page = 0;
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
}
