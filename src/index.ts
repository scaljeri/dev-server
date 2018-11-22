// import * as express from 'express';

import * as http from 'http';
import { Server, Config } from './server';

const args = process.argv.slice(2);
const httpPort = normalizePort(process.env.PORT || 8080);
console.dir(args);

const app = Server.bootstrap({ src: args[0], baseUrl: args[1] }).app;

app.set("port", httpPort);
const httpServer = http.createServer(app);

//listen on provided ports
console.log('Dev server is up and runnint http://localhost:' + httpPort);
httpServer.listen(httpPort);
//
// //add error handler
// httpServer.on("error", onError);
//
// //start listening on port
// httpServer.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
