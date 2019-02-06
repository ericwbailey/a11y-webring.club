'use strict';
const sites = require('../data/sites.json');

const randomSite = sites[Math.floor(Math.random()*sites.length)];
console.log(randomSite);

exports.handler = function(event, context, callback) {
    var response = {
        statusCode: 302,
        headers: {
            "Location" : `${randomSite.uri}?from=webring`,
            "Cache-Control": "no-store"
        },
        body: `Redirecting to ${randomSite.name}`
    };
    
    callback(null, response);
};