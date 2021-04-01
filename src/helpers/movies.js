const axios = require('axios');

const getDataMovie = async (paramMovies) => {
  let dataMovies = {};
  const url = 'https://www.omdbapi.com';

  await axios
    .create({
      params: paramMovies,
    })
    .get(url)
    .then((response) => {
      dataMovies = response.data;
    })
    .catch((err) => {
      dataMovies = err.response.data;
    });
  return dataMovies;
};

const moviesHelpers = { getDataMovie };

module.exports = moviesHelpers;
