


//exercise 3
const http = require("http");


const all = 'this is an HTML tag'

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
//   console.log("running inside server");

    res.write(all);


res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});