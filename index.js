const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res) => {
    if (req.url == "/") {
        fs.exists("demo.txt", (result) => {
            if (result) {
                res.end("True");
            }
            else {
                res.end("False");
            }
        });


    }
});


server.listen(5050);
console.log("Server Run Success");