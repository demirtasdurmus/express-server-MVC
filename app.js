// built in Nodemodules
const path = require("path");
// libraries and frameworks
const express = require("express");
const app = express();
const compression = require('compression');
const helmet = require("helmet");
const morgan = require("morgan");
// internal modules/utils/middlewares/services
const api = require("./api");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const AppError = require('./utils/AppError');

// setting up logger
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
};

// setting security HTTP headers
app.use(helmet());

// parsing incoming requests with JSON body payloads
app.use(express.json());

// parsing incoming requests with urlencoded body payloads
app.use(express.urlencoded({ extended: true }));

// serving the static files
app.use(express.static(path.join(__dirname, "public")));

// handling gzip compression
app.use(compression());

// redirecting incoming requests to api.js
app.use("/api/v1", api);

app.all('*', (req, res, next) => {
    console.log(httpStatus.NOT_FOUND);
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// global error handler
app.use(globalErrorHandler);

module.exports = app;