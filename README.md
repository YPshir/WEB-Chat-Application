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

#### Creating user model, migration and seeder.
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
######

