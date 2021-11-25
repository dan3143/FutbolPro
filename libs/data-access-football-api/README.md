# data-access-football-api
Library for fetching data about countries, football teams and players.

If `NODE_ENV` is set to `production`, it will get its data from [API-FOOTBALL](https://www.api-football.com/). In all other cases, it will use mocked data.

The following environment variables are necessary to use the API:
- `NX_FOOTBALL_API_URL`: The URL of the football API. Defaults to https://api-football-v1.p.rapidapi.com/v3.
- `NX_FOOTBALL_API_KEY`: The API key.
- `NX_FOOTBALL_API_HOST`: The API host.