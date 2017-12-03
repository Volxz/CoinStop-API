const nhrp = require('./helpers/parse-net-hashrate');
const phrp = require('./helpers/parse-pool-hashrate');
const getPoolConfig = require('./helpers/get-pool-config');
const stripPoolJSON = require('./helpers/strip-pool-json');
const combinePoolAPIData = require('./helpers/combine-pool-api-data');

let apiData = {};

const http = require('http');
const port = 3000;


const requestHandler = function (request, response) {
    response.writeHead(200,{"Content-Type": "application/json"});
    response.end(apiData);
};

const server = http.createServer(requestHandler)

setTimeout(()=>{server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})},10000);


setInterval(function() {
    getPoolConfig().then(
        function (data) {
            stripPoolJSON(data).then(
                function (data) {
                    combinePoolAPIData(data).then(
                        function (data) {
                            apiData = JSON.stringify(data);
                        })
                }
            );
        });
}, 10000);





