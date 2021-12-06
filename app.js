// built in Nodemodules
const path = require("path");
// libraries and frameworks
const express = require("express");
const app = express();
const morgan = require("morgan");
const api = require("./api");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const AppError = require('./utils/appError');

// to parse the incoming requests with JSON payloads
app.use(express.json());
// to parse the incoming requests in urlencodedform
app.use(express.urlencoded({ extended: true }));
// to serve the static files
app.use(express.static(path.join(__dirname, "public")));

// Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
};

// redirect incoming requests to api.js
app.use("/api/v1", api);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// global error handler
app.use(globalErrorHandler);

module.exports = app;