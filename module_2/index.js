const node = require('./other')
const minus = node.substract(5, 2);
// console.log(http);
// console.log(node.name);
// console.log(minus);



/*
--------------------------
create first node server
-----------------------------
*/

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<p> This is HTML Page </p>');
        res.end()
    }
    else if (req.url == '/raju') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<p> This is Raju\'s Page </p>');
        res.end()
    }
    else if (req.url == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<p> This is about Page </p>');
        res.end()
    }

    /*
    how can we find json data from api like below. we can use only "/" in "/json" like below
    */

    else if (req.url == '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ name: 'Raju', age: '22', designation: 'MERN Stack Developer' }))
    }
})

const PORT = 5000;
server.listen(PORT);
console.log(`Server is Running... on ${PORT}`)

