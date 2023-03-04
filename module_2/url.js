const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
    const add_url = `http://localhost:5000/contact?name=raju&country=bangladesh`;
    const parse_url = url.parse(add_url, true)
    const queryObject = parse_url.host
    console.log(queryObject);
})


const PORT = 5000;
server.listen(PORT);
console.log(`Server Running on ${PORT}`);