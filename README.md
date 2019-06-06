# Connections Transport App Challenge - Symbiote

###
The goal of this app is to provide a user with the ability to create "connections" for transport stops they make use of regularly. This app allows users to create new connections, and display information about those connections.
###

## Modules/tools Used ##

##### React Create React App #####
A really great way to get up and running quickly, configuring webpack and Babel can sometimes be a pain, having them preconfigured for me meant I can get up and running in no time.

##### React Router #####
React Router is the de-facto React routing library and for good reason, its very easy to get a static web app with a few "pages" connected.

##### Node-sass #####
A no briner, once you go Sass, you'll never go back. I mainly used it because I prefer to seperate my css by theme and I strongly prefer to nest my css elements where possible.

##### Redux #####
Being a small app, I thought it would be better to avoid Redux and keep a simple global state in App.js, however it quickly starting becoming messy, so after some tinkering and some refresher guides on Redux I took the plunge and realised I need to brush up on it... I did get it holding together in the end. This part of the challenge has proven to be super educational!

## Commands ##

-`npm install` to setup application/install dependencies

-`npm start` to start the app

## Known issues
- A user can add duplicate stops to their connections - I need to add some logic to the form select options dropdowns
- Looks like one of the actions is invalidating a state value, this is the final crucial step as the connections listing page relies on the global storage to display the connections to the user.




