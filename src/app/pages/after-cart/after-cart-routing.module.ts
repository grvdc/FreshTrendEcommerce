import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfterCartPage } from './after-cart.page';

const routes: Routes = [
  {
    path: '',
    component: AfterCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfterCartPageRoutingModule {}
