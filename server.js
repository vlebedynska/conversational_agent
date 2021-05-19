const http = require('http');
const { SentimentManager } = require('node-nlp');


// && req.url === '/sentiment_analysis'

const requestListener = function (req, res) {
    if (req.method === 'POST') {
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            sentiment
                .process('de', body)
                .then(result => {
                    res.setHeader("Access-Control-Allow-Origin", "*")
                    res.writeHead(200);
                    res.end(result.vote);
                });
        });
    } else {
        res.writeHead(200);
        res.end('Hello, World!');
    }
}


const sentiment = new SentimentManager();
// sentiment
//     .process('de', 'Mir gehts ok')
//     .then(result => console.log(result));


const server = http.createServer(requestListener);
server.listen(8090);


