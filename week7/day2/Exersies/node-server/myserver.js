const http = require("http");

const first ='<h1>This is my first response</h1>'
const second ='<h1>This is my second response</h1>'
const third = '<h4>This is my third response</h4>'
const all = [first , second , third];

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
//   console.log("running inside server");
for(i = 0; i < all.length;i++){
    res.write(all[i]);

}
res.end();
});
server.listen(3000);
//exercise 1

