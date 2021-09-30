'use strict';
const serverless = require('serverless-http')
const app = require('./app.js')


module.exports.doctor = serverless(app)
