


function set(modelName){
    var json = [];
    var obj = {};
    return `
        function set${modelName}(){
             $response = $this->insertInto("${modelName}",$this->request["body"]);
           
                $this->response->send(200,$response);
        
        }
    `;
}

module.exports = {
    set: set
};