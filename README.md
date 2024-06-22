# Welcome to Flights Service

## Project Setup

- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the
  downlaoded project
- Create a `.env` file in the root directory and add the following environment
  variable
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add
  the following piece of json

```
{
  "development": {
    "username": "YOUR_DB_LOGIN_NAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you've added your db config as listed above, go to the src folder from
  you terminal and execute `npx sequelize db:create`

## DB Design

- Airplane Table
- Flights Table
- Airport Table
- City Table

- A flight belongs to an airplane but one airplane can be used in multiple
  flights.
- A city has may airports but one airport belongs to a city.
- One airport can have many flights, but a flight belongs to one airport.

![alt ER Diagram](FlightsAndSearchService ER Diagram.png)
