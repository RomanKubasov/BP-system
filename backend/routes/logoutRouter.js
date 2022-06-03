const express = require('express');

const router = express.Router();
router.route('/')
  .post((req, res) => {
    req.session.destroy();
    res.clearCookie('autorization');
    res.sendStatus(200);
  });

module.exports = router;
