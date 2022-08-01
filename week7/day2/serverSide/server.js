const http = require ('http');
const user = {
    firstname: 'John',
    lastname: 'Doe'
}
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
   const mtJ =  JSON.stringify(user)
   res.write(mtJ);

    
    
    res.end();
    });
    server.listen(8080);
    ///exercise 2