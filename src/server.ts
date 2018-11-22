import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as fs from 'fs';
import * as logger from "morgan";
import * as path from "path";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import * as serve from 'express-static';
import * as url from 'url';
import { Helper } from './mime-type';

export interface Config {
    src?: string | undefined;
    baseUrl?: string | undefined;
}

/**
 * The server.
 *
 * @class Server
 */
export class Server {
    private baseUrl: string;
    private src: string;

    public app: express.Application;

    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static bootstrap(options: Config = {}): Server {
        return new Server(options);
    }

    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor({src = __dirname, baseUrl = '/'}) {
        this.src = src || '/';
        this.baseUrl = (baseUrl || '//').replace(/\/$/, '');

        console.log('src=' + src);
        console.log('baseUrl=' + baseUrl);
        this.app = express();

        //configure application
        this.config();

        //add routes
        this.routes();

        //add api
        this.api();
    }

    /**
     * Create REST API routes
     *
     * @class Server
     * @method api
     */
    public api() {
        //empty for now
    }

    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    public config() {
        //add static paths
        // this.app.use(express.static(path.join(__dirname, "public")));

        // //use logger middlware
        // this.app.use(logger("dev"));
        //
        // //use json form parser middlware
        // this.app.use(bodyParser.json());
        //
        // //use query string parser middlware
        // this.app.use(bodyParser.urlencoded({
        //     extended: true
        // }));
        //
        // //use cookie parser middleware
        // this.app.use(cookieParser("SECRET_GOES_HERE"));
        //
        // //use override middlware
        // this.app.use(methodOverride());
        //
        // //catch 404 and forward to error handler
        // this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        //     err.status = 404;
        //     next(err);
        // });
        //
        // //error handling
        // this.app.use(errorHandler());
    }

    /**
     * Create router
     *
     * @class Server
     * @method api
     */
    public routes() {
        this.app.get('*', (req, res) => {
            const url = req.originalUrl;


            let file = path.basename(url);
            let dir = path.dirname(url);

            if (url.match(/\/$/)) {
                file = 'index.html';
                dir = url;
            }

            dir = dir.replace(this.baseUrl, '')
                .replace(/^\/+/g, '');

            const mime = Helper.getMime(file);
            this.serveFile(res, path.join(this.src, dir,  file), mime);
        });
    }

    private serveFile(res, path, mime = 'text/html') {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                return res.end('Error loading ' + path + ' with Error: ' + err);
            }
            res.writeHead(200, {'Content-Type': mime});
            res.end(data);
        });
    }
}