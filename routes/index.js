var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/new_game', function(req, res) {
  res.render('new_game', { title: 'New Game Entry' });
});

/* GET home page. */
router.get('/index', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'gameAssign Test Page!' });
});

/* GET Userlist page. */
router.get('/gamelist', function(req, res) {
  var db = req.db;
  var collection = db.get('games');
  collection.find({},{},function(e,docs){
      res.render('gamelist', {
          "gamelist" : docs
      });
  });
});

module.exports = router;
