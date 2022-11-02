'use strict';
//Import
const db = require('@arangodb').db;

//Define collections
const commesse = 'commesse';

//Create the collection if it doesn't exist

if (!db._collection(commesse)) {
    db._createDocumentCollection(commesse);
}
