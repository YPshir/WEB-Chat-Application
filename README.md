# IN PROCESS..........


# WEB-Chat-Application
build a chat application using Node.js and React with Web Sockets, PostgreSQL, Redux and much more.



## Documentation of the project construction process in stages
#### start project
###### Create a main folder that will include the entire project.
###### Create a server-side folder called chat-backend.
###### If NodeJS and NPM are not installed on our computer, then install.
###### Install Express and add in the app.
###### Creating env and config files.
env - stands for environmental variables.
download dotenv package (through npm) for using .env file.
###### Define a port number that the app will listen to at the env file.
###### Creating basic project structure
Create "router" folder - which will keep the project's routes.
Create "middleware" folder - functions that will be a necessary condition for other functions.
Create "controllers" folder - which will perform our business logic.
Create "public" folder.
Create "uploads" folder - for images for example.
Create "database" folder.
Create "socket" folder - for our socket logic.
###### Installing PostgreSQL, pgAdmin and Sequelize.
create at PostgreSQL new database named "chat_app".
download in our app sequelize, sequelize-cli and pg packages (through npm)
create .sequelizerc folder
create new config for database

#### start project
###### Creating user model, migration and seeder.