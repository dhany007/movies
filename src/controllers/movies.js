const movieHelper = require('../helpers/movies');
const logsModel = require('../models/logs');

const searchMovie = async (req, res) => {
  const {
    s, type, y, page, apikey,
  } = req.query;

  const dataLogs = {
    end_point: '/search',
    param: JSON.stringify(req.query),
  };

  try {
    const param = req.query;
    const dataMovies = await movieHelper.getDataMovie(param);

    if (dataMovies.Response === 'False') {
      return res.status(400).json({
        code: 400,
        status: 'failed',
        message: dataMovies.Error,
        data: dataMovies,
      });
    }
    return res.json({
      code: 200,
      status: 'success',
      message: 'success get movie',
      data: dataMovies,
    });
  } catch (error) {
    return res.status(400).json({
      code: 400,
      status: 'failed',
      message: error.message,
      data: [],
    });
  } finally {
    // log
    await logsModel.Add(dataLogs);
  }
};

const detailMovie = async (req, res) => {
  const {
    i, t, type, y, apikey,
  } = req.query;

  const dataLogs = {
    end_point: '/detail',
    param: JSON.stringify(req.query),
  };

  try {
    const param = req.query;
    const dataMovies = await movieHelper.getDataMovie(param);

    if (dataMovies.Response === 'False') {
      return res.status(400).json({
        code: 400,
        status: 'failed',
        message: dataMovies.Error,
        data: dataMovies,
      });
    }
    return res.json({
      code: 200,
      status: 'success',
      message: 'success get detail movie',
      data: dataMovies,
    });
  } catch (error) {
    return res.status(400).json({
      code: 400,
      status: 'failed',
      message: error.message,
      data: [],
    });
  } finally {
    // log
    await logsModel.Add(dataLogs);
  }
};

const moviesController = {
  searchMovie,
  detailMovie,
};

module.exports = moviesController;
