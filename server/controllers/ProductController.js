let Product = require("mongoose").model("Product");                             // creates a variable named 'Product' which is equal to the mongoose model 'Product'

class ProductController{                                                        // creates a class called 'ProductController'

    all(req, res){                                                              // creates a method is the class 'ProductController' named 'all'
        // console.log("All Activated");                                        // confirmation to know that routes are making it to the correct location in the backend
        Product.find({}, function(err, product){                                // goes into the Product collection and finds everything within
            if(!product){                                                       // if there are no product returned ...
                return res.json(err);                                           // return an error response in json
            }
            return res.json(product)                                            // if there are no errors, return all products in the form of a json response
        });
    }

    create(req, res){                                                           // creates a method inside the class 'ProductController' named 'create' 
        // console.log("New Activated");                                        // confirmation to know that routes are making it to the correct location in the backend
        let product = new Product(req.body);                                    // creates a new instance of product based on information in req.body
        product.save(function(err){                                             // saves the product to the database schema 'Product'
            if(err){                                                            // if there is an error with saving...
                return res.json(err);                                           // return an error response in json
            }
            return res.json(product);                                           // if there are no errors, return the product that was just created
        });
    }

    findById(req, res){                                                         // creates a method inside the class 'ProductController' named 'findById'
        // console.log("FindById Activated")                                    // confirmation to know that routes are making it to the correct location in the backend
        Product.findOne({_id:req.params.id}, function(err, product){
            if(!product)return res.json(err);                                   // if there is an error, return an error
            return res.json(product);                                           // if there are no errors, return the product that was just found
        });
    }

    update(req, res){                                                           // creates a method inside the class 'ProductController' named 'update'
        // console.log("Update Acitvated")                                      // confirmation to know that routes are making it to the correct location in the backend
        // console.log(req.body);                                               // method to know what information has made it to the backend
        Product.findOne({_id:req.params.id}, (err, product)=>{                  // looks into the "Product" collection for the id that matches the information in the request
            if(!product){                                                       // if there is no product found ...
                return res.json(err);                                           // returns an error in the form of a json object
            }
            product.name = req.body.name || product.name;                       // makes the name of the product that was found equal to the request name or if there  was no request name, makes it equal to itself
            product.quantity = req.body.quantity || product.quantity;           // makes the quantity of the product that was found equal to the request quantity or if there  was no request quantity, makes it equal to itself
            product.price = req.body.price || product.price;                    // makes the price of the `product` that was found equal to the request price or if there  was no request price, makes it equal to itself
            product.save(err=>{                                                 // saves any changes to the database
                if(err){                                                        // if there is an error...
                    return res.json(err);                                       // returns a response in the form of a json object containing the error
                }
                return res.json(product);                                       // returns a response in the form of a json object containing the product
            });
        });
    }

    remove(req, res){                                                           // creates a method inside the class 'ProductController' named 'remove'
        // console.log("Delete Activated")                                      // confirmation to know that routes are making it to the correct location in the backend
        Product.findOne({_id:req.params.id}, (err, product)=>{                  // looks into the "Product" collection for the id that matches the information in the request
            // console.log(req.params.id);                                      // logs the id that comes in the params to ensure information is reaching backend
            if(!product){                                                       // if there is no product found...
                // console.log("Found an error:", err);                         // way of in more detail knowing what the error is before it goes to the front end
                return err;                                                     // returns the error
            }
            Product.remove({_id:req.params.id},(err)=>{                         // removes from the 'Product' schema the data that matches the id found in the params
                if(err){                                                        // if there is an error...
                    return res.json(err);                                       // returns a response in the form of a json object containing an error
                }
                // console.log("Deleted")                                       // confirmation that the information was deleted
                return res.json(product);                                       // returns a response in the form of a json object containing the product
            });
        });
    }
}
module.exports = new ProductController();                                       // exports a new instance of the 'ProductController'