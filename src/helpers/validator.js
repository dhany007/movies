const { query, validationResult } = require('express-validator');

const ruleSearchMovie = () => [
  query('apikey')
    .notEmpty().withMessage('param apikey is required'),
  query('s')
    .notEmpty().withMessage('param s (search) is required'),
];

const ruleDetailMovie = () => [
  query('apikey')
    .notEmpty().withMessage('param apikey is required'),
];

const validate = (req, res, next) => {
  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res.status(400).json({
      code: 400,
      message: err.errors[0].msg,
      data: [],
    });
  }
  return next();
};

const validator = {
  ruleSearchMovie,
  ruleDetailMovie,
  validate,
};

module.exports = validator;
