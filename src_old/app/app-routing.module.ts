import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from '../app/products/products.component';
import {CartComponent} from '../app/cart/cart.component'

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
 
  },
  {
    path: 'mycart',
    component: CartComponent,
 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
