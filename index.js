//import json-server libary in index.js

//insted of import use require
const jsonServer = require('json-server')

//create server using json-server libaray

const mediaPlayerServer=jsonServer.create()

//create an path to db.json
const router = jsonServer.router('db.json')


//middleware to convert js to json
const middleware = jsonServer.defaults()
//connect
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//by deafult json,js run avune 3000 ila
//so set up port for server 

const port = 5100 || process.env.port
//monitor 4000 
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer is listening to ${port} and waiting for the request`);
})