const express = require('express');
const { users } = require('../db/models');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      let arrUsers = await users.findAll();
      arrUsers = JSON.parse(JSON.stringify(arrUsers));
      return res.json(arrUsers);
    } catch (err) {
      console.log('ERROR--->', err);
      return res.sendStatus(500);
    }
  });

module.exports = router;
