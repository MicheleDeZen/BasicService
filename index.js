'use strict';
//Import
const createRouter = require('@arangodb/foxx/router');
const joi = require('joi');
const db = require('@arangodb').db;
const aql = require('@arangodb').aql;

//Create and set the router
const router = createRouter();
module.context.use(router);

//Load collections
//const exampleCollection = db._collection('ExCollectionName');