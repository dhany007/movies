# Prerequisite

- This API is used to access https://www.omdbapi.com/. You can read the documentation for using parameters there.
- You can get your own apikey by registering using your email in this link https://www.omdbapi.com/apikey.aspx. or you can use my apikey: 
    - "d69ab5e0"
    - "faf7e5bb"

# Instalation

## Configure Database

Create database `movie` in your local and import file `movie.sql`

## Clone

```bash
$ git clone https://github.com/dhany007/movies.git
$ cd movies
$ npm install
```

## Create Environment Variable

```bash
$ cp .env.example .env
$ nano .env
```
```bash
PORT = YOUR_PORT

DB_HOST = "YOUR HOST"
DB_USER = "YOUR USER"
DB_PASS = "YOUR PASSWORD"

```

### Start  Server

```bash
$ npm run dev (Development)
$ npm start (Production)
$ npm test (For Test)
```

### Example

  `http://localhost:3000/search?apikey=d69ab5e0&s=Batman`



# API Spec

## Deploy in Public url

- You can access this API in public IP with (https://lychee-crisp-13562.herokuapp.com/) and follow api specs below
- example request: (https://lychee-crisp-13562.herokuapp.com/detail?apikey=d69ab5e0&i=tt0372784)

## Authentication

All API must use authentication

Request : 
- Query Param :
    - apikey : "your own api key"
  
## Search Movie

Request: 
- Method : GET
- Endpoint : `/search`
- Header : 
  - Accept : application/json
- Query Param:
  - s : Movie title to search for. required
  - type : [movie, series, episode] Type of result to return. optional
  - y : Year of release. optional
  - page : Page number to return [1-100]. optional
- Response : 
  ``` json
    {
      "code": "number",
      "status": "string",
      "message": "string",
      "data": {
          "Search": [
              {
                  "Title": "string",
                  "Year": "string",
                  "imdbID": "string, unique",
                  "Type": "string",
                  "Poster": "string"
              },
          ],
          "totalResults": "string",
          "Response": "string"
      }
    }
  ```

## Detail Movie

Request: 
- Method : GET
- Endpoint : `/detail`
- Header : 
  - Accept : application/json
- Query Param:
  - i : A valid IMDb ID (e.g. tt1285016). *
  - t : Movie title to search for. *
  - type : [movie, series, episode] Type of result to return. optional
  - y : Year of release. optional
  - *Please note while both "i" and "t" are optional at least one argument is required.
- Response : 
  ``` json
    {
      "code": "number",
      "status": "string",
      "message": "string",
      "data": {
        "Title": "string",
        "Year": "string",
        "Rated": "string",
        "Released": "string",
        "Runtime": "string",
        "Genre": "string",
        "Director": "string",
        "Writer": "string",
        "Actors": "string",
        "Plot": "string",
        "Language": "string",
        "Country": "string",
        "Awards": "string",
        "Poster": "string",
        "Ratings": [{
            "Source": "string",
            "Value": "string"
          },
          {
            "Source": "string",
            "Value": "string"
          },
          {
            "Source": "string",
            "Value": "string"
          }
        ],
        "Metascore": "string",
        "imdbRating": "string",
        "imdbVotes": "string",
        "imdbID": "string, unique",
        "Type": "string",
        "DVD": "string",
        "BoxOffice": "string",
        "Production": "string",
        "Website": "string",
        "Response": "string"
      }
    }
  ```

