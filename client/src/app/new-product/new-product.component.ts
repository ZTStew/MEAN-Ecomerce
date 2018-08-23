import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { ProductService } from "../product.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
    private product: any;

  constructor(private ps: ProductService, private router:Router) { 
      this.init();
  }
  init(){
      this.product = {
          name:"",
          quantity:"",
          price:"",
          errors: {}
      }
  }

  ngOnInit() {
  }

    create(){
    console.log("here at create");
    console.log(this.product)
    this.ps.create(this.product, (data)=>{
        if(data.errors){
          this.product.errors = data.errors;                                   // sets the empty dictionary (errors) to be equal to the errors that have been returned
        } else {
          this.router.navigateByUrl("/products");                                          // allows for reouting back to specified url after the actions of the function have been completed
        } 
      });
    }

    reset(){
        console.log("here at reset")
        this.product = {
          name:"",
          quantity:"",
          price:"",
          errors: {}
      }
    }

}
