# Welcome to Flights Service

## Project Setup

- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the
  downlaoded project.
- Create a `.env` file in the root directory and add the following environment
  variable.
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add
  the following piece of json.
- For a detailed explanation on how the `src/config`, `src/migrations`,
  `src/models`, and `src/seeders` directories and their contents are generated,
  please refer to the link provided below. To save time, these directories and
  files were automatically created using the command `npx sequelize init`.
- For more information on Sequelize, visit the
  [Sequelize documentation](https://sequelize.org/docs/v6/other-topics/migrations/).

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

- Then execute `npx sequelize db:migrate`.

## DB Design

- Airplane Table
- Flights Table
- Airport Table
- City Table

- A flight belongs to an airplane but one airplane can be used in multiple
  flights.
- A city has may airports but one airport belongs to a city.
- One airport can have many flights, but a flight belongs to one airport.

  ![FlightsAndSearchSerivce ER Diagram](https://github.com/Rishabh-Kumar01/FlightsAndSerachService/assets/72819281/b3b33e04-09ee-424e-9b7b-26b638698d41)

## Tables

### City -> id, name, createdAt, updatedAt

```
npx sequelize model:generate --name City --attributes name:String
```

### Airport -> id, name, address, cityId, createdAt, updatedAt

```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```

### Airplane -> id, modelNumber, capacity, createdAt, updatedAt

```
npx sequelize model:generate --name Airplane --attributes modelNumber:String,capacity:Integer
```
