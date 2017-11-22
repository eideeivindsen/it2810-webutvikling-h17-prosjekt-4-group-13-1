#  Group 13 - Project 4

For full user manual, see [the documentation](DOCUMENTATION.md)

The website is hostet at: http://it2810-13.idi.ntnu.no:8084/ 

If you want to run it locally, or you are not at NTNU follow these steps:


### 1. Getting Started

To run this project on your local computer, you will need to have [Node.js][] installed.

### 2. Installation

Clone this repository, then using a terminal, navigate to the [Website](Website/) directory and run the following:

```bash
$ npm install
```

### 3. Usage

To start the server, run this command in the folder:

```bash
$ npm start
```

If the server is able to start with your configuration, you will see this in
your terminal:

```bash
webpack: Compiled successfully.
```

The browser will now open a new window and the application will be running on [http://localhost:4200](http://localhost:4200).


### 4. Running from server

```bash
$ ng build
$ node server.js
```

OR

```bash
$ npm run server
```

The page will now be built AND served and can now be found on [http://localhost:8084](http://localhost:8084) and on [http://localhost:4200](http://localhost:4200) 

### 5. Testing
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
