import express from "express";

class Server {
    public app: express.Application;
    public port: number | string;

    constructor(port: number | string) {
        this.app = express();
        this.port = port;
    }

    public registerMiddleWare() {}

    public listen() {
        this.app
            .listen(this.port, () => {
                console.log(
                    `Application is listening on the port ${this.port}`
                );
            })
            .on("error", (err) => console.log(err));
    }
}

export default Server;
