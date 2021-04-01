const { Router } = require('express');
const moviesRouter = require('./routes/movies');

const router = Router();

router
  .use('/', moviesRouter)
  .use('/*', (req, res) => res.status(400).json({
    code: 400,
    status: 'failed',
    message: 'router not found',
  }));

module.exports = router;
