# [Expenser](https://expense-tracker-beta-puce.vercel.app/)

This web app aims to help users manage their expenses by providing a neat and easy to navigate UI along with data visualization through charts.

## Features ⭐

- Admin Panel
- Create Transactions
- Delete Transactions
- Chart Data Visualization
- Table Pagination
- Responsive Design

## Project Roadmap 🛣

- Charts
  - Currently monthly view is static. Goal is to fetch monthly expense vs savings data and show monthly comparison
- Settings Page
  - Currently page does not have any functionality. Goal is to allow user to change Google name to a nickname or name of choice
- Expenses/Savings Page
  - Pages currently display a user's expenses/savings. Goal is to add a dropdown menu to filter the table data to fetch data based on selected month 

## Project Bugs 🐛
- Responsive Design
  - Application styling breaks on Safari but works fine on Safari mobile

## Tech Stack 👨‍💻

### Client

- React.js
- Redux
- Google Authentication
- Styled-components
- Deployed on Vercel

### Server

- Node.js
- Express.js
- MongoDB
- Deployed on Heroku

### Notes

- Since the backend is deployed on heroku the dyno is put to sleep when there is no traffic or requests being pinged to the heroku server. So when previewing the app, please give the dyno 15-30 seconds to wake up the app.

### How to run project locally
- Clone the repo
- run npm i or npm install both in the server and client folders
- Within the server folder there is a file called 'example.env'. Change the values based on your enviroment.
  - After changing those values, within the index.js file change the path from './config/index.env' to './config/example.env'
- Within the client folder you must create a .env file and create a variable called 'REACT_APP_GOOGLE_CLIENT_ID' and provide it its corresponding value.
- Within the client>src>helper there is a file called devUrl.js. Change the value to your local server address for example 'http://localhost:5000'.

## Authors

- **Mohammad Rafey** [rafeym](https://github.com/rafeym)
