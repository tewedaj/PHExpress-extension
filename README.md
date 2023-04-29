# PHExpress Extension
<img width="100%"  src="./assets/banner.png"/>

## PHExpress (Powered By PHP)
## Features

### Create Crud opreations and controllers from a single model
     ```
     <?php 
        include "./User.php";
        class TestModel2{
            private int $id;
            //size: 11
            private string $user_name;
            //size: 254
            private string $pass_word;
            //size: 254
            private User $user_id;
            //size: 11
    }
     
     ```
* The above is an example of what a model looks like in PHExpress 
* We need the size comment inorder to create database table accordingly 
* now press on ``` Ctrl + p ``` and then search for ```PHExpress: CRUD```  to create all the controllers and RestFull interface for CRUD operations on the model



**Enjoy!**
