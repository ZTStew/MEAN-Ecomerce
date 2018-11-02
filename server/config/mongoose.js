const mongoose = require("mongoose");                                           // tells file that it requires mongoose
const path = require("path");                                                   // tells file that it needs path(allows file to search through other files)
const fs = require("fs");                                                       // tells file that it requires file search(allows file to serach for other files)
const models = path.join(__dirname,"../models");                                // tells file where to find the 'models' folder

mongoose.connect("mongodb://localhost:27017/ExamProducts");                     // tells file where to find the Port for mongoose and gives the Schema it is supposed to use.

fs.readdirSync(models).forEach(function(file){                                  // uses file search to look through 'models' folder
    if(file.indexOf(".js") >= 0){                                               // if the type of the file is a .js file ...
        require(models+"/"+file);                                               // require that file
    }
});