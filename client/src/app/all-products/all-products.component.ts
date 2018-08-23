import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
    private allProducts: any;

  constructor(private ps:ProductService) { }

  ngOnInit() {
      this.getAllProducts()
  }
  
  getAllProducts(){
      this.ps.all(data=>this.allProducts=data);
      // console.log(this.allProducts.length)
  }

}
