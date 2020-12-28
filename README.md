# IN PROCESS..........


# WEB-Chat-Application
build a chat application using Node.js and React with Web Sockets, PostgreSQL, Redux and much more.



## Documentation of the project construction process in stages
#### start project
##### Create a main folder that will include the entire project.
##### Create a server-side folder called chat-backend.
##### If NodeJS and NPM are not installed on our computer, then install.
##### Install Express and add in the app.
##### Creating env and config files.
###### env - stands for environmental variables.
###### download dotenv package (through npm) for using .env file.
##### Define a port number that the app will listen to at the env file.
##### Creating basic project structure
###### Create "router" folder - which will keep the project's routes.
###### Create "middleware" folder - functions that will be a necessary condition for other functions.
###### Create "controllers" folder - which will perform our business logic.
###### Create "public" folder.
###### Create "uploads" folder - for images for example.
###### Create "database" folder.
###### Create "socket" folder - for our socket logic.
##### Installing PostgreSQL, pgAdmin and Sequelize.
###### create at PostgreSQL new database named "chat_app".
###### download in our app sequelize, sequelize-cli and pg packages (through npm)
###### create .sequelizerc folder
###### create new config for database  
  
#### Creating user model, migration and seeder
##### creating user model and migration.
###### run command - sequelize model:create --name User --attributes firstName:string,lastName:string,email:string,password:string,gender:string,avatar:string. this command created a user.js file in models folder and <number>create-user.js at database/migrations folder.
###### run command - sequelize db:migrate for updating in the DataBase all that we've done. (use sequelize:db:undo for droping tabels that we've added)  
  
##### creating user seeder file
###### Database seeding is the initial seeding of a database with data. Seeding a database is a process in which an initial set of data is provided to a database when it is being installed. It is especially useful when we want to populate the database with data we want to develop in future. This is often an automated process that is executed upon the initial setup of an application.
###### run command - sequelize seed:create --name users. <number>users.js created at seeders folder.
###### inserting at this file a users and their details.
###### run command - sequelize db:seed:all for enter that data to the DataBase.  
  
##### Hashing users passwords with bcrypt
###### installing bcrypt in our application throuth npm and include bcrypt in the seeder file at the password fields and at the include in the file
###### first command  sequelize db:seed:undo and then sequelize db:seed:all  
  
#### Refactoring node router and adding authentication
##### Initial router
###### Add in the router folder index.js file for the initial router and require express.Router() and add 'home' route and add router.use('./auth) In order for us to have access to routes in another file.
###### require this file in the main index.js and declare app.use("router/index").
###### add in the router folder auth.js file and add 'login' and 'register' route.
##### parsing request body
###### install through npm - body-parser and including it in the main index file.
###### we will use bodyParser.json() and bodyParser.urlEncoded({extended:true}) (the seconde is for images)
##### Creating Auth Controllers and loging in users
###### inside controllers folder we will add new authController.js that use bcrypt and User model and that will exports login and register functions.
###### include in the router/auth the login and the register functions from the authController.
###### in this authController file we declare the functions login and register and start to build the login function.
##### Generating JWT (json web token)
###### install through npm - jsonwebtoken and include this package at authController file.
###### add generateToken() function in authController - this function create token for user.
##### Finishing register functionality and creating proper secret key
###### add APP_KEY to .env file by using 'crypto' package of node and add this APP_KEY to our jwt.sign() function in authController file.
###### build register() function.
###### add to models/user.js hooks field for hashing password and add the hashingPassword function with 'bcrypt' package.
##### Adding Server Side form request validation
###### install through npm - 'express-validator' package.
###### add validators folder and inside index.js file and include {validationResult} from 'express-validator' package.
###### add to validators folder - auth folder and inside add register.js and login.js file and include in those files {body} from 'express-validator' package.
###### in auth.js router file include the validate function from index.js in valdators folder and register and login from auth folder in validators folder and use those functions as middleware.  



  
#### Creating React Application and setting project structure
##### Installing React APP and setting project structure
###### we will run command in our main folder of the project chat-app: npx create-react-app chat-frontend. now we have 2 folders: one for the server side and the second for the client side.
###### Now we're going to clean up the Unnecessary files at the react application:
###### clean App.js file - delete content, remove logo (also remove logo.svg file itself).
###### clean App.css file.
###### inside src folder create 'components' folder.
###### inside src folder create 'store' folder - for redux store managment (reducers, actions and all types).
###### inside src folder create 'assets' folder - for keeping our images and scss.
###### inside src folder create 'services' folder - performs ajax operations - everything we wanna fetch from the backend will display here.
###### inside src folder create 'utils' folder - keep all our helpers functions.  
  
#### Creating Auth components and authentication user
##### Creating Initial components and adding React Router
###### create 'Auth' and 'Chat' folders at components folder
###### in Auth folder create Login.js and Register files
###### in Chat folder create Chat.js file
###### import all those files at App.js file
###### install throught npm 'react-router-dom' and import {BrowserRouter, Route, Switch} at App.js
##### Creating Login Component
##### Styling Login Component and installing scss parser
###### install throught npm 'node-sass' // help to compile scss code
###### import at App.css from 'Google Fonts' 'roboto' font
###### convert App.css to App.scss
###### create at assets/scss folder _variables.scss file
###### create at components/Auth Auth.scss file
##### Creating and styling Register Component 
###### Import {Link} from 'react-router-dom' at Register.js and Login.js components
###### Add all the inputs (email, passwors, etc.) to Register.js and Login.js components
##### Making component styles responsive
###### make responsive the Auth.scss file with @media()
##### Authenticating user with axios
###### axios is a Promise based HTTP client for the browser and node.js
###### in Login component import {useState} from 'react'
###### install throught npm - 'npm i axios' and import at Login component
###### At chat-backend folder install with npm i cors and include at index.js and app.use cors
##### Adding axios base configuration and creating API services
###### at services folder create api.js file and import axios
###### at services folder creat import authService.js

#### Adding Redux and working on Auth features
##### installing Redux and creating auth actions






