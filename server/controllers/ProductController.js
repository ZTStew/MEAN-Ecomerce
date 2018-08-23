let Product = require("mongoose").model("Product");

class ProductController{

    all(req, res){
        // console.log("All Activated");
        Product.find({}, function(err, product){
            if(!product){
                return res.json(err);
            }
            return res.json(product)
        });
    }

    create(req, res){
        // console.log("New Activated");
        let product = new Product(req.body);
        // console.log(req.body);
        // console.log(product);
        // product["_id"] = 1;
        // console.log(product["_id"]);
        product.save(function(err){
            if(err){
                // console.log("Found An Error:", err);
                // console.log(err)
                return res.json(err);
            }
            return res.json(product);
        });
    }

    findById(req, res){
        // console.log("FindById Activated")
        Product.findOne({_id:req.params.id}, function(err, product){
            if(!product)return res.json(err);                                   // if there is an error, return an error
            return res.json(product);
        });
    }

    update(req, res){
        // console.log("Update Acitvated")
        // console.log(req.body);
        Product.findOne({_id:req.params.id}, (err, product)=>{
            if(!product){
                return res.json(err);                                           // if there is an error, return an error
            }
            product.name = req.body.name || product.name;
            product.quantity = req.body.quantity || product.quantity;
            product.price = req.body.price || product.price;
            product.save(err=>{
                if(err){
                    return res.json(err);
                }
                return res.json(product);
            });
        });
    }

    remove(req, res){
        // console.log("Delete Activated")
        Product.findOne({_id:req.params.id}, (err, product)=>{
            // console.log(req.params.id);
            if(!product){
                // console.log("Found an error:", err);
                return err;
            }
            Product.remove({_id:req.params.id},(err)=>{
                if(err){
                    return res.json(err);
                }
                // console.log("Deleted")
                return res.json(product);
            });
        });
    }
}
module.exports = new ProductController();