const mongoose = require("mongoose");                                           // tells file that it requires mongoose
const path = require("path");                                                   // tells file that it needs path(allows file to search through other files)
const fs = require("fs");                                                       // tells file that it requires file search(allows file to serach for other files)
const models = path.join(__dirname,"../models");

mongoose.connect("mongodb://localhost:27017/ExamProducts");

fs.readdirSync(models).forEach(function(file){
    if(file.indexOf(".js") >= 0){
        require(models+"/"+file);
    }
});