'use strict';
module.exports = function(app) {
  var gameList = require('../controllers/gameassignController');

  // todoList Routes
  app.route('/games')
    .get(gameList.list_all_games)
    .post(gameList.create_a_game);

  app.route('/games/:gameId')
    .get(gameList.read_a_game)
    .put(gameList.update_a_game)
    .delete(gameList.delete_a_game);
};
