# FutbolPro
A Nx + NextJS based app to show football information.

You can select a country from the list, and it will show all the football teams from that country. The teams themselves can also be clicked and they will show all the players.

The project uses [API-FOOTBALL](https://www.api-football.com/) to get the data when in production, and mocked data in other environments.

## How to run
1. Clone this repository
2. Add a `.env` file in apps/next with all the variables specified [here](libs/data-access-football-api/README.md).
3. Run `npm run dev`
4. Open your project in `localhost:4200`

To run all the tests use `npm run test`. To run the tests of a specific library or app, run `npx nx test <name>`.