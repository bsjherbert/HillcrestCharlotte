const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/connection-card', require('./connCardController'));
apiControllers.use('/bible-reading-plan', require('./bibleReadPlanController'));
apiControllers.use('/sermons', require('./sermonsController'));

module.exports = apiControllers;
