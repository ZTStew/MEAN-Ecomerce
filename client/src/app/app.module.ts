import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AllProductsComponent } from './all-products/all-products.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { ProductService } from "./product.service"

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    ProductInfoComponent,
    NewProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
