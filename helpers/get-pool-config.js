const rp = require('request-promise');
const parsePHashrate = require('./parse-pool-hashrate');
const parseNHashrate = require('./parse-net-hashrate');
const getPoolConfig = function getPoolConfig() {
    return new Promise((resolve, reject) => {
        let configJSONRequest = {
            uri: 'https://coinstop.me/config/pools.json',
            json: true
        };
        rp(configJSONRequest)
            .then(function (configJSON) {

                resolve(configJSON)
            })
            .catch(function (err) {
                reject(err);
            });

    })
};
module.exports = getPoolConfig;