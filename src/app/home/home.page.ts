import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, NavigationExtras } from '@angular/router';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  page:any;
 
 
pic:any;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
    loop: true,
    
  };
  slide = [
    { id: 1, image: 'https://img.freepik.com/free-photo/beautiful-girl-with-evening-makeup-large-earrings-jewelry_132268-18.jpg?size=626&ext=jpg' },
    { id: 2, image: 'https://img.freepik.com/free-photo/beautiful-girl-with-evening-makeup-large-earrings-jewelry_132268-18.jpg?size=626&ext=jpg' },
    { id: 3, image: 'https://img.freepik.com/free-photo/beautiful-girl-with-evening-makeup-large-earrings-jewelry_132268-18.jpg?size=626&ext=jpg' },
  ];

  categories=[
    {bimg:'https://cdn.shopify.com/s/files/1/2395/3423/files/201912-ear-party_360x.jpg?v=1579718481',
  text:'CARTILAGE EARRING',
    category:'Cartilage',
},
    {bimg:'https://cdn.shopify.com/s/files/1/2395/3423/files/double-princess-cut-14k-gold-belly-ring_7_720x.jpg?v=1579718501',
  text:'BUTTON RINGS',
  category:'button',
},
    {bimg:'https://cdn.shopify.com/s/files/1/2395/3423/files/nose-ring-group-5b-web_720x.jpg?v=1561424823',
    text:'NOSE RINGS',category:'nose',},
    {bimg:'https://cdn.shopify.com/s/files/1/2395/3423/files/straight-barbells_720x.jpg?v=1561424779',
    text:'NIPPLE RINGS',category:'nippleRings',},
    {bimg:'https://cdn.shopify.com/s/files/1/2395/3423/files/gold-plugs-group-concept-1_720x.jpg?v=1579718545',
    text:'PLUGG & TUNNELS',category:'plugg',},
    {bimg:'https://cdn.shopify.com/s/files/1/2395/3423/files/four-diamonds-seamless-ring-hoop-Font-facing-1-rose-67K_720x.jpg?v=1579718566',
    text:'HOOPS & CAPTIVES',category:'hoops',},

  ]
  constructor(private auth : AuthService,    private router: Router,
    ) {}

  
  async ionViewWillEnter() {
    let datas = await this.auth.newApi().subscribe(datar=>{
      console.log("this.newProducts",datar);
      })
    }
     
    goToShopPage(category){
      console.log("category print", category);
      // this.router.navigateByUrl('/shop-page');
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(category)
        }
      };
      this.router.navigate(['shop-page'], navigationExtras);

    }

}
