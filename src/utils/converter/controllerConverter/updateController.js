function updateByC(modelName,model){
    var response = "";
   model.forEach(variable => {
    var paramName = variable.name.split("_").join("");

    response = response + `
        export async function updateBy${paramName}(${paramName}_data,object){
       await ${modelName}.update(object, {
            where: {
              ${paramName}: ${paramName}_data
            }
          });
        }
    `;

   });

   return response;
}


module.exports = {
    updateByC: updateByC
};