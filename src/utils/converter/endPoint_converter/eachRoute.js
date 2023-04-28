
const { readContent } = require("../../IO/readFile");
const { writeFile } = require("../../IO/writeFile");
const concatNewLine = require("../../contentManager/concatNewLine");
const { getTextModelDetail } = require("../../regex/modelRegex");
const {combineRoutes} = require("./combineRoutes");
// const { combineAllControllers } = require("./combineAll");

async function convertAllRoutes(projectName,vscode) {
    var content = await readContent("/model/", "models.php", vscode);
    const getArrayRegex = /(\")(.*?)(\")/g;
    var modelList;


    while (modelList = getArrayRegex.exec(content)) {

        var pageContent = await readContent("/model/", modelList[2], vscode);
        if (pageContent != null && pageContent != "") {
            var modelDetail = getTextModelDetail(pageContent);
          var endPoints = combineRoutes(modelList[2].split(".")[0],modelDetail);
            
            await writeFile(`/${projectName}/routes/`, modelList[2].split(".")[0] + ".js", vscode,endPoints);
            var appJs = await readContent(`/${projectName}/`,"app.js",vscode);
            appJs = `var express = require('express'); \n
                var app = express();
              var ${modelList[2].split(".")[0]}Route =  require("./routes/${modelList[2].split(".")[0]}.js");
            ${appJs.split("express();")[1]?.split("app.listen")[0]}
            
            app.use('/${modelList[2].split(".")[0]}',${modelList[2].split(".")[0]}Route);
            
            app.listen(3000, () => {
               
            })
            module.exports = app;
            \n  ` ;
            await writeFile(`/${projectName}/`,"app.js", vscode,appJs);


        }

    }
}

module.exports = {
    convertAllRoutes: convertAllRoutes
}