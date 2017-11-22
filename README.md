#  GROUP 13 - PROJECT 4


### DOCUMENTATION

For a detailed user manual, see the full [documentation](DOCUMENTATION.md).


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
