const newman = require('newman');
require('dotenv').config();
 
newman.run({
    //collection:`https://api.postman.com/collections/33823808-c8fc6b0f-d009-4c0e-9a7e-e9d862396158?access_key=${process.env.access_key}`,
   collection:require('./collection/dmoney-REST-API-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});