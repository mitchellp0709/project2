# Project 2
#### J. Mitchell Paoletti

## Project Summary

For this project I will be building a database that will compile games from the MOBA Smite. I will complie a database of all (or some) of the gods in Smite. Users will be able to add, edit and remove Smite gods from the database. 

As a secondary route, users will be able to log in and compile a team from the gods in the database. The program will run a rough analysis to show your teams strengths and weakness based on god damage type, area damage, and range. The extent of the analysis will depend on whether or not I can get an extended API and how much data I'm given from this API.

## Tools & Libraries Used
-CSS - Styling for the pages
-Javascript - Host a server and create routers to generate pages to Liquid via React
-jQuery - Update HTML objects
-Express - Used to create servers and generate pages to Liquid
-Liquid - Creates templates for our webpages
-Dotenv - Used to create environmental variables
-bcrypt - Used to encrypt passwords for user login
-Mongo DB - Database that will be used to store information for the Smite gods
-Mongoose - Used to access and edit the Mongo database
-Method Override - Used to override the methods used in requests to the browser



## Route Table

List your routes in a table

| url | method | action |
|-----|--------|--------|
| /list | get | get all gods (index)|
| /list/:id | get | get a particular god (show)|
| /list/:id/edit | get | edit a particular god|
| /list/new | get | generates the form to add a new god|
| /list | post | adds a new god to the database|
| /list/:id | put | updates a particular god|
| /list/delete | delete | deletes a particular god|


## User Stories

A user will be able to see a list of all playable gods

A user will be able to view a detail page on each of the playable gods

A user will be able to edit any of the playable gods

A user will be able to add a playable god 

A user will be able to delete a god from the list

A user will be able to complie a team of 5 gods

A user will be able to log in via username and password to see their team compisitions 

A user will be able to see an analysis of their team composition

## Challenges

- detail roadblocks and anything you did to overcome whether you did or didn't

## List of Technologies