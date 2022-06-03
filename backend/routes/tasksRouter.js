const fetch = require('cross-fetch');
const express = require('express');
const { tasks, users, statuses } = require('../db/models');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      let arrTasks = await tasks.findAll({
        order: [['id', 'ASC']],
        include: [{
          model: users,
          as: 'createdByUser',
        }, {
          model: users,
          as: 'responsibleUser',
        }, {
          model: statuses,
        }],
      });
      arrTasks = JSON.parse(JSON.stringify(arrTasks));
      return res.json(arrTasks);
    } catch (err) {
      console.log('ERROR--->', err);
      return res.sendStatus(500);
    }
  })

  .post(async (req, res, next) => {
    try {
      const {
        title, text, createdByUser_id, responsibleUser_id,
      } = await req.body;

      await tasks.create({
        title, text, createdByUser_id, responsibleUser_id, status_id: 2,
      });

      // await fetch('https://hooks.slack.com/services/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', { /* BP test */
      await fetch('https://hooks.slack.com/services/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', {
        method: 'post',
        headers: {
          'Content-Type': 'Content-type: application/json',
        },
        body: '{"text":"Hi Leopards! New Task Created http://localhost:3000/"}',
      });
      return res.sendStatus(200);
    } catch (err) {
      console.log('ERROR--->', err);
      return res.sendStatus(500);
    }
  })

  .delete(async (req, res, next) => {
    const { id } = req.body;
    try {
      await tasks.destroy({ where: { id } });
      return res.sendStatus(200);
    } catch (err) {
      console.log('ERROR--->', err);
      return res.sendStatus(500);
    }
  })

  .put(async (req, res, next) => {
    try {
      const { id, status_id } = await req.body;
      if (await tasks.update({ status_id }, { where: { id } })) {
        return res.sendStatus(200);
      }
      return res.sendStatus(500);
    } catch (err) {
      console.log('ERROR--->', err);
      return res.sendStatus(500);
    }
  });

module.exports = router;
