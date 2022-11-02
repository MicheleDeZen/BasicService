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
const commesse = db._collection('commesse');

router.get('/commesse', function (req, res) {
    const commessa = db._query(aql`
        FOR commessa IN ${commesse}
            RETURN commessa
    `);
    res.send(commessa);
})
    .response(joi.array().required(), 'Tutte le commesse')
    .summary('Get all commesse')
    .description('Returns an array of all documents in the commesse collection');