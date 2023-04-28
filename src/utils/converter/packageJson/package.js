const {writeFile} = require("../../IO/writeFile");


async function generatePackage(projectName,vscode){
    var packageJson = {
        "name": projectName,
        "version": "0.0.0",
        "private": true,
        "scripts": {
          "start": "node ./bin/www"
        },
        "dependencies": {
          "axios": "^0.21.1",
          "bcrypt": "^5.0.0",
          "body-parser": "^1.19.0",
          "cookie-parser": "~1.4.4",
          "cors": "^2.8.5",
          "dateformat": "^4.5.1",
          "debug": "~2.6.9",
          "dotenv": "^8.2.0",
          "express": "~4.16.1",
          "form-data": "^3.0.0",
          "fs": "0.0.1-security",
          "google-libphonenumber": "^3.2.15",
          "googleapis": "^68.0.0",
          "helmet": "^4.1.1",
          "jwt-decode": "^3.1.1",
          "lodash": "^4.17.21",
          "mammoth": "^1.4.16",
          "morgan": "~1.9.1",
          "node-fetch": "^2.6.1",
          "nodemailer": "^6.4.17",
          "pdf2pic": "^2.1.4",
          "pdfjs": "^2.4.2",
          "pdfkit": "^0.11.0",
          "pg": "^8.4.2",
          "pg-hstore": "^2.3.3",
          "pm2": "^4.5.0",
          "request": "^2.88.2",
          "sequelize": "^6.3.5",
    
        },
        "devDependencies": {
          "nodemon": "^2.0.6"
        }
      };
    
      await writeFile("/","package.json",vscode,JSON.stringify(packageJson));
}


module.exports = {
    generatePackage: generatePackage
}   