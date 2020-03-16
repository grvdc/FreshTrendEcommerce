import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfterCartPageRoutingModule } from './after-cart-routing.module';

import { AfterCartPage } from './after-cart.page';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfterCartPageRoutingModule,
  ],
  declarations: [AfterCartPage,PaymentComponent],
  entryComponents:[PaymentComponent]
})
export class AfterCartPageModule {}
