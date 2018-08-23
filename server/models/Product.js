let mongoose = require("mongoose");                                             // tells page that it requires mongoose
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

mongoose.model("Product", new mongoose.Schema({
    uid: {
        type: String,
    },
    
    name: {
        type: String, 
        required:[ true, "Product Must Have A Name" ],
        minlength: [ 3, "Product Name Must Be At Least Three Characters Long." ]
    },
    quantity: {
        type: Number,
        required: [ true, "Product Must Have A Quantity" ],
        validate: [ Number.isInteger, "Value Must Be A Whole Number" ],
        min: [ 0, "Product Quantity Must Be Greater Than Or Equal To 0." ]
    },
    price: {
        type: Number,
        required: [ true,"Product Must Have A Price" ],
        min: [ 0, "Product Price Must Be Greater Than Or Equal To 0." ]
    }

}, {timestamps: true}));
