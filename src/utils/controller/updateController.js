function updateByC(modelName,model){
    var response = "";
   model.forEach(variable => {
    var paramName = variable.name.split("_").join("");

    response = response + `
        public function updateBy${paramName}(){
        $response  =   $this->updateWhen(" ${variable.name} = ". $this->request["params"]["${paramName}"] ,"${modelName}",$this->request["body"]);
           
                $this->response->send(200,'{"Success": true , "Message": "Successfully Updated"}');
           
        }
    `;

   });

   return response;
}


module.exports = {
    updateByC: updateByC
};