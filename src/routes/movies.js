const { Router } = require('express');
const moviesController = require('../controllers/movies');
const validator = require('../helpers/validator');

const router = Router();

router
  .use(
    '/search',
    validator.ruleSearchMovie(),
    validator.validate,
    moviesController.searchMovie,
  )
  .use(
    '/detail',
    validator.ruleDetailMovie(),
    validator.validate,
    moviesController.detailMovie,
  );

module.exports = router;
