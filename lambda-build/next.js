'use strict';
const sites = require('../data/sites.json');

const findSite = (url) => {
    const site = sites.findIndex(function(item) {
        return item.uri.includes(url) 
    });
    console.log(site);
    return site;
}

exports.handler = function(event, context, callback) {
    const uri = event.headers.host;
    const siteId = findSite(uri);
    const nextSite = sites[siteId + 1];
    console.log(nextSite);
    var response = {
        statusCode: 302,
        headers: {
            "Location": nextSite.uri
        },
        body: `event is ${event}`
    };
    callback(null, response);
};