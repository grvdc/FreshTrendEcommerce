import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent,{static:false}) content: IonContent;

  page: any;
  shows:boolean=false;
  cartBadge = 0;
  pic: any;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
    loop: true,

  };
  slide = [
    { id: 1, image: 'https://img.freepik.com/free-photo/beautiful-girl-with-evening-makeup-large-earrings-jewelry_132268-18.jpg?size=626&ext=jpg', 
    text:'Gold Flat-back Studs' },
    { id: 2, image: 'https://img.freepik.com/free-photo/beautiful-girl-with-evening-makeup-large-earrings-jewelry_132268-18.jpg?size=626&ext=jpg',
    text:' Diamond Nose Rings' },
  ];

  // Categories Defines To show Category in front Dynamically Start
  categories = [
    {
      bimg: 'https://cdn.shopify.com/s/files/1/2395/3423/files/201912-ear-party_360x.jpg?v=1579718481',
      text: 'CARTILAGE EARRING',
      category: 'Cartilage',
      header: 'Cartilage Earrings & Piercing Jewelry',
    },
    {
      bimg: 'https://cdn.shopify.com/s/files/1/2395/3423/files/double-princess-cut-14k-gold-belly-ring_7_720x.jpg?v=1579718501',
      text: 'BUTTON RINGS',
      category: 'button',
      header: 'Belly Button Rings',
    },
    {
      bimg: 'https://cdn.shopify.com/s/files/1/2395/3423/files/nose-ring-group-5b-web_720x.jpg?v=1561424823',
      text: 'NOSE RINGS', category: 'nose',
      header: 'Nose Rings - 14k Gold & Diamond Nose Rings',
    },
    {
      bimg: 'https://cdn.shopify.com/s/files/1/2395/3423/files/straight-barbells_720x.jpg?v=1561424779',
      text: 'NIPPLE RINGS & BARBELLS', category: 'nippleRings',
      header: 'Nipple Rings & Piercing Jewelry',
    },
    {
      bimg: 'https://cdn.shopify.com/s/files/1/2395/3423/files/gold-plugs-group-concept-1_720x.jpg?v=1579718545',
      text: 'PLUGG & TUNNELS', category: 'plugg',
      header: 'Ear Plugs, Tunnels & Gauges',
    },
    {
      bimg: 'https://cdn.shopify.com/s/files/1/2395/3423/files/four-diamonds-seamless-ring-hoop-Font-facing-1-rose-67K_720x.jpg?v=1579718566',
      text: 'HOOPS & CAPTIVES', category: 'Necklace',
      header: 'Hoops - Captives - Clickers'
    },

  ]
  // Categories Defines To show Category in front Dynamically End

  constructor(private auth: AuthService, private router: Router,
  ) { }


  async ionViewWillEnter() {
    this.getCartCount()
    let datas = await this.auth.newApi().subscribe(datar => {
      console.log("this.newProducts", datar);
    })
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

  onScroll(event) {
    let hi = event.detail.scrollTop;
    // console.log('scroll event scrollTop', event.detail.scrollTop);
   
    // console.log('content', this.content);
    // if (event.detail.deltaY > 0) {
    //   console.log("scrolling down, hiding footer...");
      
     
    // } else {
    //   console.log("scrolling up, revealing footer...");
     
    // };
   
  };


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
}
