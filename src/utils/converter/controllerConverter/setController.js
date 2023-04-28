



function set(modelName){
    return `
     export async  function set${modelName}(${modelName}_object){
            ${modelName}.create(${modelName}_object).then((res)=>{
                return true;
            }).catch((err)=>{
                return false;
            });
        }
    `;
}

module.exports = {
    set: set
};