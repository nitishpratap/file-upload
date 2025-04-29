const createError = require("http-errors");
//create 404 error
function errorCreator(app) {
    app.use(function(req, res, next) {
        next(createError(404));
    });
}

module.exports = errorCreator;