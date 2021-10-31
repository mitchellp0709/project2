# Project 2
#### J. Mitchell Paoletti

## Project Summary

For this project I will be building a database that will compile games from the MOBA Smite. I will complie a database of all (or some) of the gods in Smite. Users will be able to add, edit and remove Smite gods from the database. 

Users will be able to log in and complie a team from the gods in the database or from their created gods. This page will show users their team where they will be able to see all of their team's abilities and damage type.


## Tools & Libraries Used
-CSS - Styling for the pages
-CSS Reset- CSS framework
-Milligram CSS- CSS framework
-Javascript - Host a server and create routers to generate pages to Liquid via React
-jQuery - Create modal
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
| /gods | get | get all gods (index)|
| /gods/:id | get | get a particular god (show)|
| /gods/:id/edit | get | edit a particular god|
| /gods/new | get | generates the form to add a new god|
| /gods | post | adds a new god to the database|
| /gods/:id | put | updates a particular god|
| /gods/delete | delete | deletes a particular god|
| /gods/:id/addteam | get | Adds a god to the user's team|
| /gods/:id/removeteam | get | Removes a god from the user's team|
| /gods/team | get | Shows user's team|
| /user/signup | get | Brings users to a signup page|
| /user/create | post | Creates the user in a database and hashes their password|
| /user/login | get | Brings users to a login page|
| /user/login | post | Verifys user's sign in information|
| /user/logout | get | Destroy's user session and logs them out|


## User Stories

A user will be able to see a list of all playable gods

A user will be able to view a detail page on each of the playable gods

A user will be able to edit any of the playable gods

A user will be able to add a playable god 

A user will be able to delete a god from the list

A user will be able to complie a team of gods

A user will be able to log in via username and password to see their team composition 


## Challenges

My biggest challenge was being able to have users log in and be able to create teams. I could have users log in, but it did nothing practical. The solution to this problem was to grab the gods from the database, duplicate them with the added key of the username, and then display only the gods in the database with the user's username. The user's team page also had to be modified to display only items form the database that have both the user's username and the team tag. From there everything was handled by ID and the reminder of the program ran the same. 
