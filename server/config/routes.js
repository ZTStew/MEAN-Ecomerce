let ProductController = require("../controllers/ProductController.js");         // creates a variable named 'ProductController' that is equal to the file found at the route
let path = require("path");                                                     // requires path

module.exports = function(app){                                                 // exports an anonomus function
    /*RestaurantController*/
    app.get("/api/product/all", ProductController.all);                         // creates a get request at the specifide route and tells the request where to go to be processed
    app.post("/api/product/create", ProductController.create);                  // creates a post request at the specifide route and tells the request where to go to be processed
    app.get("/api/product/find/:id", ProductController.findById);               // creates a get request at the specifide route and tells the request where to go to be processed
    app.patch("/api/product/update/:id", ProductController.update);             // creates a patch request at the specifide route and tells the request where to go to be processed
    app.delete("/api/product/remove/:id", ProductController.remove);            // creates a delete request at the specifide route and tells the request where to go to be processed

    app.all("*", (req, res, next) => {                                          // catch all that sends route to angular
        res.sendFile(path.resolve("./client/dist/client/index.html"));          // tells app where to route browser for catch-all data
    });
}
