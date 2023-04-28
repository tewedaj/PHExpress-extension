const { select, selectBy } = require("./selectEndPointConvert");




    


function combineRoutes(modelName,modelDetail){
    return `
    var ${modelName}_controller = require("../controller/${modelName}Controller");
    var express = require('express');
    
    //auto generated file \n 
    
    //$app->setParent("${modelName}");
   
    var app = express();


    ${select(modelName)} \n \n 
    ${selectBy(modelName,modelDetail)} \n \n
    


    `;
}

module.exports = {
    combineRoutes: combineRoutes
}