let ProductController = require("../controllers/ProductController.js");
let path = require("path");

module.exports = function(app){
    /*RestaurantController*/
    app.get("/api/product/all", ProductController.all);
    app.post("/api/product/create", ProductController.create);                        // create route
    app.get("/api/product/find/:id", ProductController.findById);
    app.patch("/api/product/update/:id", ProductController.update);
    app.delete("/api/product/remove/:id", ProductController.remove);

    app.all("*", (req, res, next) => {                                          // catch all that sends route to angular
        res.sendFile(path.resolve("./client/dist/client/index.html"));   // tells app where to route browser for catch-all data
    });
}