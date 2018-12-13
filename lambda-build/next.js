'use strict';
const sites = require('../data/sites.json');

const findSite = (url) => {
    const site = sites.findIndex(function(item) {
        return item.uri.includes(url) 
    });
    console.log(site);
    return site;
}

const isLast = (siteId) => {
    return siteId === sites.length - 1 ? true : false
}

exports.handler = function(event, context, callback) {
    const uri = event.headers.host;
    const siteId = findSite(uri);

    const lastCheck = isLast(siteId);
    console.log(lastCheck);
    const nextSite = lastCheck ? `${sites[0].uri}` : `${sites[siteId + 1].uri}`;
    console.log(nextSite);
    var response = {
        statusCode: 302,
        headers: {
            "Location": nextSite
        },
        body: `event is ${event}`
    };
    callback(null, response);
};