let mongoose = require("mongoose");                                             // tells page that it requires mongoose
let Schema = mongoose.Schema;

mongoose.model("Product", new mongoose.Schema({                                 // creates a new mongoose collection named 'product'

    name: {                                                                     // creates a document called 'name' inside of the 'product' schema
        type: String,                                                           // makes it so that information input into the name document is a string
        required:[ true, "Product Must Have A Name" ],                          // makes name document to be a required entry into database, has custom error message for better description
        minlength: [ 3, "Product Name Must Be At Least Three Characters Long." ]// sets a minimum length for 'name' and creates a custom error message for easier debugging
    },
    quantity: {                                                                 // creates a document called 'quantity' inside of the 'product' schema
        type: Number,                                                           // ensures information input into this document is a number
        required: [ true, "Product Must Have A Quantity" ],                     // sets the 'quantity' to be a required value
        validate: [ Number.isInteger, "Value Must Be A Whole Number" ],         // ensures that the 'quantity' is only ever an interger
        min: [ 0, "Product Quantity Must Be Greater Than Or Equal To 0." ]      // sets a minimum length for the 'quantity'
    },
    price: {                                                                    // creates a document inside of the 'product' table named 'price'
        type: Number,                                                           // ensures information input into this document is a number
        required: [ true,"Product Must Have A Price" ],                         // sets the 'price' to be a required value
        min: [ 0, "Product Price Must Be Greater Than Or Equal To 0." ]         // sets a minimum length for the 'price'
    }

}, {timestamps: true}));                                                        // automaticly creates a 'created_At' and 'updated_At' inside of the 'product' collection for each entry
