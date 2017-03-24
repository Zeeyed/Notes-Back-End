# Note Back End
> Note back end is a REST API build to provide CRUD operations to the Note app

# Getting started

## Clone the repository
```sh
git clone git@github.com:Zeeyed/Notes-Back-End.git
```

## Install nodemon globally
```sh
npm install nodemon -g
```
## Install all dependecies
```sh
npm install
```

## Start the local server
```sh
nodemon index
```

# Code overview

## Dependencies

- [expressjs] : Node js web application that serve for handling HTTP requests
- [mongoose] : MongoDB object modeling tool that serve for modeling and mapping MongoBD data to javascript
- [bodyparser] : Node.js body parsing middleware that serve to parse body requests
- [nodemon]: Watch any change in the node js app and restart automatically the server - used for development

## Application Structure

- `index.js`: The entry point to our application. It define the express server, connected to MongoDB. It also require routes and models.
- `routes`: The route definitions of our API.
- `models`: The schema definition of our MongoBD models.  

