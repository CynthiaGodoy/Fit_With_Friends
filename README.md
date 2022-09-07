![License](https://img.shields.io/badge/license-MIT-brightgreen)

# Fit With Friends

## Description
Fitness with Friends, is a Full-Stack application designed and built using the **MVC (Model View Controller) paradigm**, with a server-side API with user authentication, as well as, a Node server connection, and Sequelize to interact with a MYSQL database. Express-Handlebars was one of the NPM packages used for the project. In addition, GitHub techiques such as branching, merging were used extensively. The tasks were done collaboratively but team members worked concurrently on sections of the MVC with the routes, models, and handlebars following the guidelines. Each team member assisted each other in cases where there were gaps or difficulties in the code. The project uses an open forum for the application for users to login into a user account page to view and post their activities and movements.The focus was to get goals and activites to post in the main user account page. The application can run on a localhost has been launched on Heroku. Fitness with Friends has been styled with Bootstrap and CSS.

## Deployed Heroku URL:
[LiveURL Heroku](https://fitwithfriends-app.herokuapp.com/)

[GITHUB with Original Commits](https://github.com/AuraFly/Fit_With_Friends.git)

## Team Members
Project 2 - Team 8
- Cynthia Godoy
- Ellen Furness
- Walker Jezek
- Jordan Covarrubias

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [License](#license)
  - [Git Info](#git-info)
  - [Contact](#contact-me)

## Installation 
NPM Packages Used:
- [bcrypt 5.0.1](https://www.npmjs.com/package/bcrypt)
- [colors 1.4.0](https://www.npmjs.com/package/colors)
- [connect-session-sequelize 7.1.3](https://www.npmjs.com/package/connect-session-sequelize)
- [dotenv 16.0.1](https://www.npmjs.com/package/dotenv)
- [express 4.18.1](https://expressjs.com/)
- [express-handlebars 6.0.6](https://www.npmjs.com/package/express-handlebars)
- [express-session 1.17.3](https://www.npmjs.com/package/express-session)
- [mysql2 2.3.3](https://www.npmjs.com/package/mysql2)
- [sequelize 6.19.2](https://sequelize.org/docs/v6/getting-started/)
- [sql-template-strings 2.2.2](https://www.npmjs.com/package/sql-template-strings)
- [Formidable](https://formidable.com/) A Node.js module for parsing form data, especially file uploads.

Additional Tools used:
- [Trello](https://trello.com/en-US) - Kanban Board an agile methodology and a visual method for managing and processing work.

## Usage
Deploying to Heroku:
1. [To install the Heroku CLI](https://coding-boot-camp.github.io/full-stack/heroku/how-to-install-the-heroku-cli)

Once Heroku has been installed, verify Heroku was installed on Terminal
```
heroku --version
```

Once Heroku is verified on Terminal, check your git is installed.
```
git --version
```

2. [Heroku documentation on getting started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)

To direct your project to your heroku account
```
heroku login or heroku login i
cd ~/ PROJECT LOCATION
heroku create
```

3. [To deploy a project on Heroku](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide)

Create a variable to locate Port
```
const port = process.env.PORT || 3001
```

Terminal
```
git status
git init
heroku create
git remote -v
git add -A
git commit -m "Pushing to Heroku"
git push heroku main
```

To open the application from the terminal
```
heroku open
```

4. [Heroku documentation on creating a Heroku remote](https://devcenter.heroku.com/articles/git#creating-a-heroku-remote)
To confirm there is a remote name heroku set on your app
```
git remote -v
```

# Contribution
Open to any and all contributions!

# Screenshots
![](/public/images/Screenshot.PNG)
</br>
![](/public/images/Screenshot3.PNG)
</br>
![](/public/images/Screenshot4.PNG)

# License
This application is covered under the MIT open source license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
