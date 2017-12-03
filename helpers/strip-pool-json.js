const stripPoolJSON = function stripPoolJSON(poolConfigJSON) {
    return new Promise((resolve, reject) => {
        let tempPoolArray = [];
        let jsonKeys = Object.keys(poolConfigJSON);
        let i = 0;

        jsonKeys.forEach(function (k) {
            tempPoolArray = tempPoolArray.concat(poolConfigJSON[k]);
            i++;
            if (jsonKeys.length === i) {
                resolve(tempPoolArray);
            }

        });
    })
};
module.exports = stripPoolJSON;