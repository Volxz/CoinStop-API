const convertNetHashrate = function (hashrate, callback) {
    return new Promise((resolve, reject) => {

        if (Math.ceil(hashrate).toString().length >= 0 && Math.ceil(hashrate).toString().length < 4) {//hash
            return resolve(Math.round(Math.ceil(hashrate)) + ' H/s')
        }
        if (Math.ceil(hashrate).toString().length >= 4 && Math.ceil(hashrate).toString().length < 7) {//Kilohash
            return resolve(Math.round(Math.ceil(hashrate)) / 1000 + ' KH/s')
        }
        if (Math.ceil(hashrate).toString().length >= 7 && Math.ceil(hashrate).toString().length < 10) { //Megahash
            return resolve(Math.round(Math.ceil(hashrate) / 1000000) + ' MH/s')
        }
        if (Math.ceil(hashrate).toString().length >= 10 && Math.ceil(hashrate).toString().length < 13) {//Gigahash
            return resolve(Math.round(Math.ceil(hashrate) / 1000000000) + ' GH/s')
        }
        if (Math.ceil(hashrate).toString().length >= 10 && Math.ceil(hashrate).toString().length < 16) {//Terrahash
            return resolve(Math.round(Math.ceil(hashrate) / 1000000000000) + ' TH/s')
        }
        if (Math.ceil(hashrate).toString().length >= 13 && Math.ceil(hashrate).toString().length < 19) {//Petahash
            return resolve(Math.round(Math.ceil(hashrate) / 1000000000000000) + ' PH/s')
        }
        if (Math.ceil(hashrate).toString().length >= 16 && Math.ceil(hashrate).toString().length < 22) {
            return resolve(Math.round(Math.ceil(hashrate) / 1000000000000000000) + ' EX/s')
        }
    });
};

module.exports = convertNetHashrate;