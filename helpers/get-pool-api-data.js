const rp = require('request-promise');
const parsePoolHashrate = require('./parse-pool-hashrate');
const parseNHashrate = require('./parse-net-hashrate');

const getPoolAPIData = function getPoolAPIData(pool) {
    return new Promise((resolve, reject) => {
        let poolRequest = {
            uri: pool.url,
            qs: {
                page: 'api',
                action: 'public'
            },
            json: true
        };
        rp(poolRequest)
            .then(function (poolAPIData) {
                parsePoolHashrate(poolAPIData['hashrate']).then(function (hr) {
                    parseNHashrate(poolAPIData['network_hashrate']).then(function (nhr) {
                        poolAPIData.hashrate = hr;
                        poolAPIData.network_hashrate = nhr;
                        resolve(poolAPIData);
                    })
                });
            })
            .catch(function (err) {
                reject(err);
            });

    })
};
module.exports = getPoolAPIData;