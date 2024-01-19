# Progressive Web Applications (PWA): Budget Tracker

## UofM BootCamp: Application 19
BootCamp Object Oriented Programming Challenge Team Profile Generator


### Description

*Giving users a fast and easy way to track their money is important, but allowing them to access that information at any time is even more important. Having offline functionality is paramount to the success of an application that handles users’ financial information*


# Table of Contents 
* [Summary](#description)
* [Tools Used](#tools)
* [Installation](#installation)
* [Heroku](#heroku)
* [Snapshot](#snapshot)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Heroku
- [Heroku Deployment](https://budget-mcx.herokuapp.com/)


### Application Functionalities

- The ability to enter deposits funds offline.
- The ability to enter expenses costs offline.
- Offline entries should be added to the tracker after the application is brought back online

### User Story

```text
AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 
```

### Acceptance Criteria

```text
GIVEN a budget tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
```
# Snapshot

<img width="600" alt=" Main Page" src="https://raw.githubusercontent.com/Mcnoor/Challenge-Module19-BC/main/budget.png">


# Installation
* To use this app npm init has to be called to create your package.json file.
* The following necessary Npm dependencies must be installed to run the application properly: the needed dependencies will be found on the package.json file.
* To properly install the database you must create at cluster on Mongodb atlas.
* Run "npm start" for the port to start listening with mongoose.
* This app is deployed on Heroku


# License
![license badge](https://img.shields.io/badge/license-MIT-brightgreen)

# Contributing
Contributors: UofM BC & MCX

# Tests
The project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3002 to view it in the browser.
npm start on local machince

The page will reload if you make edits.
You will also see any errors in the console.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.


## Tools 
- [IndexDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Heroku](https://www.heroku.com)
- [NPM Bcrypt Package](https://www.npmjs.com/package/bcrypt)
- [NPM Express.js Package](https://www.npmjs.com/package/express)
- [NPM JSONWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [NPM Mongoose Package](https://www.npmjs.com/package/mongoose)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Node.js](https://nodejs.org/en/)
- [NPM nodemon Package](https://www.npmjs.com/package/nodemon)
- [NPM JWT-Decode Package](https://www.npmjs.com/package/jwt-decode)

  
# Questions?
## Please contact me:
  * [My GitHub Profile](https://github.com/Mcnoor/)
  * [My Github Project Repository](https://github.com/Mcnoor/Challenge-Module19-BC)
  * Email us at: [maxanoor](mailto:maxanoor@gmail.com.com) with questions or make an issue about this project.
