# Warewolf - Documentation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.'

## What is Warewolf?
For project 4, our task was to develop an app that handles some kind of search in a real database. The way we chose to solve this task was by implementing an online grocery catalog for a fictional grocery store. It's purpose is to help customers browse through the different products (or wares, get it?) that are available in the store. Warewolf also supports the employees by letting them add new products as they "arrive at the store".

## How we have solved the tasks
(The tasks are referred to in the order they appear in the project description on BlackBoard)

<b>Task 1: </b>
Warewolf is running on our virtual machine (See website link in the "Run Warewolf" section), is using node.js as the server for handling api calls, and is using Angular 4 on the frontend for handling the user interface. See the section "The Tools we used" for more information.

<b> Task 2: </b>
We used MongoDB as our database system because it’s a part of the MEAN stack; four technologies that works well together in an application. Mongodb is a NoSQL database which means relations between objects is not as important as in a SQL (or relational) database. Our solution did not need any relations between objects other than the users search history, which was easily solved by adding an array to the user object. If this application were to grow or be used a lot, then we would reconsider this way of solving it. 

If you want to view the database structure, locate the user.ts and product.ts files in: Website -> src -> app -> user.ts/product.ts.
In addition to the fields in these files, the objects gets an unique id.
All the api calls are located in the api.js file: Website -> server -> routes -> api.js.

<b> Task 3: </b>
The application reads to the database when fetching products and when logging users in. It writes to the database when registering new users as well as when adding products to the warehouse. All the data are fictional because we could not find an open dataset of groceries, but that gave us more control of the what the site should display.

<b> Task 4: </b>
One you search, the results of your search will be displayed in a listview at the bottom of the page. Here the user will see a few details of the the products that matched the search. If the user clicks one of the products, it is “viewed” and added to the users “viewed products history”, and the user gets to see a more detailed description of the product.

<b> Task 5: </b>
After searching for products, you will have the possibility to sort by name, producer and whether the item is in stock or not. By default the products are shown in the order they appear in the database.

<b> Task 6: </b>
The filtering function can be found under “Show advanced settings”. The user can then filter by Category and Producer. The user can also choose the desired max price and filter by products in stock. All these filters can be combined.

Den listebaserte visningen skal ha dynamisk lasting av data. Eksempel: etter et søk vises de 10 første treffene, men flere lastes når brukeren scroller eller ved blaing i sider. 

<b> Task 7: </b>
After searching, you will be presented with the up to 5 first items that match the search. You can further inspect the items in the list by going to the next page.

<b> Task 8: </b>
Webapplikasjonen skal ha "min side" funksjonalitet som i praksis betyr at en bruker skal kunne logge seg på og at det blir registrert noe fra brukerens søkeaktiviteten f.eks. hva brukeren har sett på tidligere eller søkene som brukeren har brukt. 
After registering and logging in, the user gets access to his personal page. From there, the user can view the last four recently viewed products in addition to a visualization of the products through a pie chart. The chart holds information about all of the viewed products and the number of times each of the products has been viewed.

<b> Task 9: </b>
If a user is logged in, the website keeps track of the user’s profile information in local storage to be used on the user’s profile page. Warewolf also uses JWT (JSON Web Tokens) to make sure only authorized requests to the server are handled. The authentication token is also stored in local storage once a valid user is logged in.

<b> Task 10:  </b>
We solved this task with a word cloud. After searching for products you will have the option to open a dialog showing a word cloud. The size of the words represents the amount of that products in stock.

<b> Task 11: </b>
We have written several unit tests, database tests and end-to-end tests for Warewolf to ensure quality of the product. See the “Run Tests” section to run these tests. We have also used several hours on manual testing where we had focus on “breaking” the product, so we believe many user errors are handled.

<b> Task 12: </b>
Prosjektet skal være godt dokumentert, slik at det er lett å sette seg inn i for andre.
This document is a part of the three-part documentation for the project:
1. The initial document from the planning phase can be found here [...]. It describes the vision and the planned implementation of the product.
2. The guide for the set up and running of the project and its tests.  [...]
3. This document with detailed documentation about the finished product, tools used and description of how the project tasks were completed. 

## The Tools we used
To solve this task, we have created a MEAN stack using:
- MongoDB: https://www.mongodb.com/
- Express: https://expressjs.com/
- Angular 4.x.x: https://angular.io/
- Node.js: https://nodejs.org/en/

On the frontend, we have used:
- Angular Material: https://material.angular.io/ 
- Angular4-word-cloud: https://www.npmjs.com/package/angular4-word-cloud
- ng2-charts: https://www.npmjs.com/package/ng2-charts 
- Angular Cli: https://cli.angular.io/ 

On the backend, we have used:
- JWT (JSON Web Tokens): https://jwt.io/ 
- Bcrypt: https://www.npmjs.com/package/bcrypt 

For testing, we used:
- Proctractor: http://www.protractortest.org/#/ 
- Jasmine: https://jasmine.github.io/ 
- Karma: https://karma-runner.github.io/1.0/index.html 
- Mocha: https://mochajs.org/ 

## Run Warewolf
A fully functional version of the application is hostet here: http://it2810-13.idi.ntnu.no:8083/.
(NB! You need to connect to the NTNU VPN if you are not at NTNU)

However, if you would like to download the project files and run it locally you are free to do so!

Clone the repo to a desired location on your computer.
```bash
$ git clone https://github.com/IT2810/it2810-webutvikling-h17-prosjekt-4-group-13-1.git
```
Enter the "Website" folder and run "npm install" to get all the dependencies.
```bash
$ cd Website
$ npm install
```
Once that is done, you may run our custom npm command "npm run server"

```bash
$ npm run server
```

The page is now available at localhost:8083. Visit this page in your web browser.

```bash
Running on localhost:8083
```

## Run Tests
We have written tests for our software which you may run if you like.

If you haven't already, clone the git repo to a desired location. In your terminal, locate the folder called "Website" and run 
```batch
$ npm install
```
to get all the required dependencies.


### Running unit tests
To run unit tests run:
```batch
$ npm test
```

### Running end-to-end tests
Run the following commands. Be sure that one finished before you run the next one.
```batch
$ ng build
$ node server
```
This terminal will now say "Running on localhost:8083".
Open a new terminal while the server is running and type the last command
```batch
$ ng e2e --no-serve
```
The end-to-end tests will now execute.

### Running database tests
To run database tests run:
```batch
$ npm run mocha
```


## What can Warewolf do?
Warewolf has four different roles:
- Admin
- Employee
- Customer
- CEO

Admin, CEO and Customer all have the same rights; Execute searches, create a user and sign in, view their profile and search history.

The Employee can in addition add new products to the database.

### Search:
Once you arrive at the page, you will immediately see the search page. Even though you don't have a user yet, you can still search, but your history won't be saved. To search, click the big button with a magnifying on it.

- Click the big, turquoise button with a magnifying on it.

Congratulations! You just did your first search using Warewolf! Doing this will show all the products currently in the database, each displaying a product name, the products producer and if it is currently in stock or not. If you click on one of the products, and accordion with additional information is displayed.

Next to the big search button is the text "Show advanced settings". If you click on it, more searching options will become available. Try the different options and see if you can find any interesting products!

- Click "Show advanced settings"
- Try searching for "Banan"
- Try finding all products by "Bama"
- Try finding all products cheaper than 20kr

In order to get a product to be added to your history, you have to click on the results displayed in the list and view the extended information. Come back to this step once you have created a user to try this out!

You might also notice that underneath the list of results, there is some text saying "Display word cloud of results". If you click the text, a modal will open with a word cloud displaying the ratio between the quantity of each product currently available. The word cloud will only display the products that is a result of your search.

- Click on the search button without any specifications
- Click "Display word cloud of results" underneath the results

NB! If your search gives only one result, you cannot display the word cloud.

### Register:

It's time to make your personal account. Click on "Sign in" in the upper right corner. This will send you to the login page. Here you will, beneath the form, see a "Register" button. Click it and you will now be at the register page.

Fill in your name, your email address as the username (this will be validated), select "Customer" as your role and type in a password. Don't worry, your password will be encrypted so even the admins cannot see your password in the database.

- Fill in your personal information as instructed
- Click the "Register" button

If everything went well, you will now be logged in to your Warewolf account! You can sign out by clicking on the exit icon next to your profile information in the upper right corner.

- Sign out by clicking the exit button in the upper right corner

### Sign in:

Once you have signed out, you can now click the "Sign in" button in the upper right corner again. Try to login to the account you created earlier.

Don't want to create an account? Use our test user:

username: <b>customer@test.com</b>
password: <b>123456</b>

- Click on the "Sign in" button in the upper right corner
- Fill in your username (email) and password
- Click "Log in"

### View profile:

Now it's time to view your profile. Once logged in, click on the button where some of your profile information is displayed. The button is in the upper right corner, where the sign in button used to be.

- Click on the button with your profile information

You now find yourself on your profile page where you can view statistics for your recently viewed products. As mentioned earlier, you have to view the extended information of the products you search for in order for them to appear on your profile page. Try doing a couple of searches, view some products and come back to your profile page to see the statistics.

- Click on the "Search" button in the upper left corner to get back to the search page.
- Do an empty search by simply clicking the magnifying glass button
- Click on some of the products that appear to view them
- Go back to your profile and view the statistics

### Add new product (Employee only):

Some functionality is exclusively available for the employees and that is to add a product to the database. You can only create Admin, CEO and Employee users if you have a secret password given to you by your manager. This password will remain a secret, but you can use our test employee to see what it looks like:

username: <b>employee@test.com</b>
password: <b>123456</b>

Once you log in as an employee, you will see a new button not previously visible. It's called "Add new" and lies just beneath the big search button. If you click it, a new section will become visible where you can gradually fill in the specifications of a new product.

The quantity and the stock status of new products will be respectively 0 and out of stock by default, because these parameters are theoretically being updated from another system. In this demo, they will remain 0 and out of stock.

If you added a new product, try searching for it!

## Further help

If you have any issues, please contact us!

henninbh@stud.ntnu.no



