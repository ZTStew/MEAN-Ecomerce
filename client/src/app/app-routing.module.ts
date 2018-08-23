import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllProductsComponent } from './all-products/all-products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
    { path:'products', pathMatch: 'full', component: AllProductsComponent },
    { path:'products/create', pathMatch: 'full', component: NewProductComponent },
    { path:'products/info/:id', pathMatch: 'full', component: ProductInfoComponent },
    { path:'products/edit/:id', pathMatch: 'full', component: EditProductComponent },
    { path:'**', pathMatch: 'full', redirectTo: "/products" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
