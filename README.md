# PHExpress Extension
<img width="100%"  src="./assets/banner.png"/>

## PHExpress (Powered By PHP)
## Features

### Create Crud opreations and controllers from a single model
     ```PHP 
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


Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Working with Markdown

You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets


**Enjoy!**
