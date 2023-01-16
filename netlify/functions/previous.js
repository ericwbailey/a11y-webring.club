'use strict';
const sites = require('../data/sites.json');

const findSite = (url) => {
    const site = sites.findIndex(function(item) {
        return item.uri.includes(url) 
    });
    return site;
}
const isFirst = (siteId) => {
    return (siteId === 0) ? true : false

}

exports.handler = function(event, context, callback) {
    const uri = event.headers.host;
    console.log(event);
    const siteId = findSite(uri);
    const firstCheck = isFirst(siteId);
    const previousSite = firstCheck ? `${sites[sites.length - 1].uri}` : `${sites[siteId - 1].uri}`;
    console.log(previousSite);

    var response = {
        statusCode: 302,
        headers: {
            "Location": previousSite
        },
        body: `event is ${event}`
    };
    callback(null, response);
};