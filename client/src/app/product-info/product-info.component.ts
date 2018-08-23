import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
    private product: any;

  constructor(
    private ps:ProductService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
      this.route.params.subscribe((params)=>{                                   // allows us to pars out the ID from the url and then tells service to get the ID that matches the ID it just pulled out of the url
        // console.log(params)
        this.ps.findById(data=>{                                          // finds the restaurant that matches the id in the url
          this.product = data;                                               // sets allReviews to be the data it got back
          // console.log(data);
          // console.log(this.product);
        }, params.id)                                                           // hands in the url id to the backend
      });
  }

  delete(productId){
      console.log("made it to delete");
      // console.log(productId);
      this.ps.remove(productId, data=>{
          this.router.navigateByUrl("/products");
    })
  }

}
