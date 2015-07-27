# Space
Lightweight, free anonymous chat service. Gives you the private space you need.

> Written using the [MEAN](http://mean.io/#!/) framework and [Socket.IO](http://socket.io/)  
> Hosted on [Heroku](http://prispace.herokuapp.com/)

## Setup local development environment
### Setup local database
#### Clone the repository
```bash
git clone https://github.com/thedrumsknight/space.git
cd space
```

#### Setup MongoDB
To setup a local Mongo database, you will need to install the MongoDB CLI, visit [this](http://docs.mongodb.org/manual/installation/) page to install the client depending on your OS.  

Start the `mongod` service and run the following command
```bash
mongoimport --db space --collection messages --file db/messages.json
```

This will setup a local Mongo database `space` with some sample data to work with.

### Install dependencies
The app uses [npm](https://www.npmjs.com/) and [bower](http://bower.io/) for dependency management  
Run the following commands to install required dependencies

```bash
[sudo] npm install
bower install
```

### Start server
To start the __development__ server, run the following commands which compile [sass](http://sass-lang.com/) and use [nodemon](http://nodemon.io/) to run the server  

The app is continuously monitored by nodemon for any changes in the code upon which the server is automatically restarted
```bash
[sudo] mongod
npm start
```


To start the __production__ server, run the following command which compiles [sass](http://sass-lang.com/) and runs a normal node server
```bash
[sudo] mongod
npm build
```

## Credits
>Developed and maintained by [Sahil Lamba](https://github.com/thedrumsknight), [Aman Shrivastava](https://github.com/amanthedorkknight) and [Mihir Rana](https://github.com/thedespicableknight)
