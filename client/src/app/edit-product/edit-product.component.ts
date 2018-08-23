import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
    private product: any;
    private hold: any;

  constructor(
    private ps:ProductService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params)=>{
        // console.log(params)
        this.ps.findById(data=>{
          this.product = data;
          this.hold = data;
          // console.log(data);
          // console.log(this.product);
        }, params.id)
      });
    }

    reset(){
        console.log("here at reset")
        this.route.params.subscribe((params)=>{
        // console.log(params)
        this.ps.findById(data=>{
          this.product = data;
          this.hold = data;
          // console.log(data);
          // console.log(this.product);
        }, params.id)
      });
    }

    update(){
        console.log("here at update")
        this.ps.update(this.product, (data)=>{
            console.log(data);
            if(data.errors){
                this.product.errors = data.errors;                                   // sets the empty dictionary (errors) to be equal to the errors that have been returned
            } else {
                this.product = data;
                return this.router.navigateByUrl("/products");
            }
        });
    }

}
