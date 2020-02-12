import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.page.html',
  styleUrls: ['./shop-page.page.scss'],
})
export class ShopPagePage implements OnInit {
  categoryType:any;
  constructor(
    private auth : AuthService, 
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(params => {
      let data:any;
      if (params && params.special) {
        this.categoryType = JSON.parse(params.special);
        console.log("Category from Home page",this.categoryType);
        this.productBycategory(this.categoryType);
      } else{
        this.auth.newApi().subscribe(datar=>{
            console.log("this.newProducts",datar);
            })
      }
    });
   }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    // let datas = await this.auth.newApi().subscribe(datar=>{
    //   console.log("this.newProducts",datar);
    //   })
    }

  productBycategory(category){
    this.auth.getProductsByCategories(category).subscribe(datar=>{
        console.log("this.newProductsCategoruies",datar);
    })
  }

}
