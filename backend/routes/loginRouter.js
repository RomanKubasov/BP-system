const express = require('express');
const bcrypt = require('bcrypt');
const { users } = require('../db/models');

const router = express.Router();

router.route('/')
  .post(async (req, res, next) => {
    const { name, pass } = req.body;
    let result = { user: false };
    const currentUser = await users.findOne({ where: { name } });
    if (currentUser) {
      const validationPass = await bcrypt.compare(pass, currentUser.pass);
      if (validationPass) {
        req.session.userName = currentUser.name;
        req.session.userId = currentUser.id;
        result = { user: true };
      }
    }
    return res.json(result);
  });

module.exports = router;
