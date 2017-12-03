const getPoolAPIData = require('./get-pool-api-data');

const combinePoolAPIData = function combinePoolAPIData(poolConfigArray) {
    return new Promise((resolve, reject) => {
        let i = 0;
        let tempJSON = {};
        poolConfigArray.forEach(function (k) {
            getPoolAPIData(k).then(function (data) {
                tempJSON[k.tag] = data;
                i++;
                if (i === poolConfigArray.length) {
                    resolve(tempJSON);
                }
            });
        })
    })
};

module.exports = combinePoolAPIData;