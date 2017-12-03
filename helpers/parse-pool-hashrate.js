const convertPoolHashrate = function (hashrate, callback) {
    return new Promise((resolve, reject) => {

        if (Math.ceil(hashrate).toString().length < 4) {//Kilohash
            return resolve(Math.round(Math.ceil(hashrate)) + ' KH/s')
        }
        if (Math.ceil(hashrate).toString().length >= 4 && Math.ceil(hashrate).toString().length < 7) { //Megahash
            return resolve(Math.round(Math.ceil(hashrate) / 1000) + ' MH/s')
        }
        if (Math.ceil(hashrate).toString().length >= 7 && Math.ceil(hashrate).toString().length < 10) {//Gigahash
            return resolve(Math.round(Math.ceil(hashrate) / 1000000) + ' GH/s')
        }
        if (Math.ceil(hashrate).toString().length >= 10 && Math.ceil(hashrate).toString().length < 13) {//Terrahash
            return resolve(Math.round(Math.ceil(hashrate) / 1000000000) + ' TH/s')
        }
        if (Math.ceil(hashrate).toString().length >= 13 && Math.ceil(hashrate).toString().length < 16) {//Petahash
            return resolve(Math.round(Math.ceil(hashrate) / 1000000000000) + ' PH/s')
        }
        if (Math.ceil(hashrate).toString().length >= 16 && Math.ceil(hashrate).toString().length < 19) {
            return resolve(Math.round(Math.ceil(hashrate) / 1000000000000000) + ' EX/s')
        }
    })
};

module.exports = convertPoolHashrate;