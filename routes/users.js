var express = require('express');
var router = express.Router();
const userModel = require('../models/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.find({}).then((user => {
    res.status(200).json({user})
  })).catch(err => {
    res.status(500).send({err})
  })
});

router.post('/', function(req, res, next) {
  const {name, email} = req.body
  userModel.create({name, email}).then((user => {
    res.status(200).json({user})
  })).catch(err => {
    res.status(500).json({err})
  })
});

module.exports = router;
