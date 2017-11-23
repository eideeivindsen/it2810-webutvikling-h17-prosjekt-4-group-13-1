#  GROUP 13 - PROJECT 4


### DOCUMENTATION

For a detailed user manual, see the full [documentation](DOCUMENTATION.md).

A fully functional version of the application is hosted here: http://it2810-13.idi.ntnu.no:8084/. (NB! You need to connect to the NTNU VPN if you are not at NTNU)

However, if you would like to download the project files and run it locally you are free to do so!

### 1. Getting Started

To run this project on your local computer, you will need to have [Node.js][] installed.

### 2. Installation

Clone this repository, then using a terminal, navigate to the [Website](Website/) directory and run the following:

```bash
$ npm install
```

### 3. Database

Warewolf uses mongodb locally. If you have used MongoDB and have it installed on your computer: Make sure that MongoDB is installed on your computer, give MongoDB permissions to the /db folder and start the database:

```bash
 $ cd gruppe13
 $ mongod --dbpath ./db/
```

Let the server run.

NOTE: The './db/' is the path to the /db folder for the project.

2) Navigate to /Server/ folder in Website and uncomment the commented line and comment the other one inside db.config.js:
```bash
module.exports = {
    //database: 'mongodb://localhost:27017/warewolf'
    database: 'mongodb://webdev-4:turtleneck2017@ds241055.mlab.com:41055/webdev-4'
};
```

### 4. Usage

To start the server, run this command in the folder:

```bash
$ ng build
$ node server.js
```

OR

```bash
$ npm run server
```

The page will now be built AND served and can now be found on [http://localhost:8084](http://localhost:8084).


### Testing
The front end (unit) tests can be run by typing:
```bash
$ npm test
```

The backend testing is done with Mocha and can be run with

```bash
$ npm run mocha
```

The end-to-end tests are done with Protractor, run the following:
```bash
$ ng build
$ node server
```
Then open a new terminal and run:
```bash
$ ng e2e --no-serve
```



[Node.js]: https://nodejs.org
