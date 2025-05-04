const router = require('../../routes/upload');

const handleError = require('./handeError');
const errorCreator = require('./errorCreater');




const handleRequest = (app) => {
    app.use('/',router);
    errorCreator(app);
    handleError(app)
}
module.exports = handleRequest;