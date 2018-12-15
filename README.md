# GitHub Finder

Github Finder which i created as a fun project after learning Angular.

Where you can search with username and view user profile, can see the number of repos, followers, following, and list of repos from where yoy can go to the repository on github.

## Setting Up

To run this app, you need to register a github app from *Developer Settings*,

after registering you'll have a *Client ID* and *Client Secret*

Now go to *src/app/services/github.services.ts* file of this application,

where you can find `YOUR CLIENT ID`, and `YOUR CLIENT SECRET`, replace these with your client id and secret.

Also replace `YOUR USERNAME` with your *github username*.

## Running this project

You must have angular installed, now
 - Run `npm install` to install all dependencies
 - Run `ng serve` to start the project
 - Go to `http://localhost:4200` to view the Project
