# React Style jQuery/Node

Demonstration of React/Redux style MVC pattern using jQuery, [deployed version](https://react-style-jquery-node.herokuapp.com/)

# Getting Started

```
git clone https://github.com/funador/react-style-jquery-node.git
cd react-style-jquery-node
npm install
touch .env
```
Open the .env file in your editor, add this line and save:
```
DB_URL=mongodb://localhost:27017/react-style-jquery-node
```

Fire up mongo ([How to install mongo](https://docs.mongodb.com/manual/installation/)):
``` 
mongod
```
Finally:
``` 
npm start
```

The app is now running at: [localhost:8080/](http://localhost:8080/)

#### Caveats
- There is intentionally no error handling in this app, this is designed to demonstrate CRUD operations using a Reacty-style front end pattern


### Issues

Something not working?  Please [open an issue](https://github.com/funador/react-style-jquery-node/issues)