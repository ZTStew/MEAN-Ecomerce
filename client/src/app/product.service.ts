import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  all(cb){
      // console.log("all Route Hit");                                          // log to confirm that routes are making it where they are suposed to
      this.http.get("/api/product/all")
      .subscribe(data=>cb(data));
  }

  create(product, cb){
      // console.log("new Route Hit");                                          // log to confirm that routes are making it where they are suposed to
      this.http.post("/api/product/create", product)
      .subscribe(data=>cb(data));
  }

  findById(cb, productId){
      // console.log("findById Route Hit");                                     // log to confirm that routes are making it where they are suposed to
      this.http.get("/api/product/find/" + productId)
      .subscribe(data=>cb(data));
  }

  update(product, cb){
      // console.log("update Route Hit");                                       // log to confirm that routes are making it where they are suposed to
      // console.log(product)                                                   // logs the information that makes it to this route
      this.http.patch("/api/product/update/" + product._id, product)
      .subscribe(data=>cb(data));
  }

  remove(product, cb){
      // console.log("remove Route Hit");                                       // log to confirm that routes are making it where they are suposed to
      // console.log(product)                                                   // logs the information that makes it to this route
      this.http.delete("/api/product/remove/" + product)
      .subscribe(data=>cb(data));
  }

}
