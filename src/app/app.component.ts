import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  classng = 'mycontent';
  data: boolean = false;

  categories = [
    {
      catName: 'SHOP BY PIERCING', catlist: [
        {
          subCat: 'Ear Piercings', subList: ['Cartilage Earrings', 'Conch Jewelry', 'Daith Jewelry', 'Ear Cuffs Non Pierced',
            'Earrings (Ear Lobe Piercings)', 'Forward Helix', 'Helix Earrings', 'Industrial Barbells', 'Rook Earrings', 'Tragus Earrings'], data: false, id: 11,
            height:'280px'
        },
        { subCat: 'Nose Rings', subList: ['Diamond Nose Rings', 'Gemstone Nose Rings',
         'Charm Nose Rings','Hoop Nose Rings','Platinum Nose Rings','Shop All'], data: false, id: 12, height:'168px' },
        { subCat: 'Belly Rings', subList: ['Non-Dangle Belly Rings', 'Dangle Belly Rings', ' Reverse Belly Button Ring',
      ' Diamond Belly Button Rings','Shop All'], data: false, id: 13,height:'135px' },
        { subCat: 'Lip Rings', subList: ['Diamond Lip Rings', 'Gemstone Lip Rings', 'Charm Lip Rings','Shop All'], data: false, id: 14,height:'107px' },
        { subCat: 'Nipple Rings', subList: ['Nipple Barbells & Bars', 'Nipple Rings & Hoops', 'Shop All'], data: false, id: 15 , height: '80px'},
        { subCat: 'Eyebrow Rings', nodata: true },
        { subCat: 'Plugs & Tunnels', nodata: true },
        { subCat: 'Septum Rings', nodata: true },
        { subCat: 'Tongue Rings', nodata: true },
      ],
      data: false,
      id:1,
      logo:'color-wand',

    },
    {
      catName: 'SHOP BY STYLE', catlist: [
        { subCat: 'Shop Our Instagram', nodata: true },
        { subCat: 'Hoops', subList: ['Captive Bead Rings', 'Seamless Rings', 'Clicker Rings', 'Shop All'], data: false,height:'102px',id: 21 },
        { subCat: 'Flat Back Earrings', nodata: true },
        { subCat: 'Circular Barbells', nodata: true },
        { subCat: 'Curved Barbells', nodata: true },
        { subCat: 'Spiral Barbell', nodata: true },
        { subCat: 'Straight Barbells', nodata: true },
        { subCat: 'Replacement Parts', nodata: true },
        { subCat: 'Diamond Body Jewelry', subList: ['Diamond Cartilage Earrings', 'Shop all'], data: false,height:'50px',id: 22 },
        { subCat: 'Pearl Body Jewelry', nodata: true },
        { subCat: 'Opal Body Jewelry', nodata: true },
        { subCat: 'Toe Rings', nodata: true },
        { subCat: 'Necklaces', nodata: true },
        { subCat: 'Aftercare', nodata: true },
        { subCat: 'New Arrivals', nodata: true },

      ],
      data: false,
      id:2,
      logo:'snow'


    }
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public menuCtrl: MenuController,
    public alertController: AlertController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // this.platform.ready().then(() => {
    //   this.statusBar.styleDefault();
    //   this.splashScreen.hide();
    // });
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(9999, () => {
        document.addEventListener('backbutton', function (event) {
          event.preventDefault();
          event.stopPropagation();
          this.platform.exitApp()
          console.log('hello');
          this.inProgress();
        }, false);
      });
      this.splashScreen.hide();
      this.statusBar.styleDefault();
    });
  }
  ionViewDidEnter() {
    document.addEventListener("backbutton",function(e) {
      console.log("disable back button")
    }, false);
}

  col(data,index) {
    console.log("col",data,index);
    if(!data.data){
      this.closeCategory();
      this.categories.map((values) => {
        if(data.id == values.id){
            values.data = true;
        }
      });
    }else{
      this.closeCategory();
    }
   
  }
  closeCategory(){
    this.categories.forEach((values) => {
      values.data = false;
    });
  }


  newD(data,index) {
    console.log('index',index)
    if(!data.data){
      this.closeSub(index);
      this.categories[index].catlist.forEach((values) => {
        if(data.id == values.id){
          if (!data.nodata) {
            values.data = true;
          } else {
            this.go();
          }
        }
      });
    } else{
      this.closeSub(index);
    }
  }

  closeSub(index){
    this.categories[index].catlist.forEach((values) => {
      values.data = false;
    });
  }

  go() {
    this.menuCtrl.toggle();
    this.router.navigateByUrl('/shop-page');
    console.log("goClick");
  }

  gotoLoginPage(){
    this.menuCtrl.toggle();
    this.router.navigateByUrl('/login');
  }

  wishlist(){
    this.menuCtrl.toggle();
    this.router.navigateByUrl('/wishlist');
  }

  async inProgress(){
    const alert = await this.alertController.create({
      header: ' Work in Progress',
      message: 'Work in progress',
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
          
          
            console.log('Confirm Okay');
          }
        }
      ]
    });

     alert.present();
   }
  
}
