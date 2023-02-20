import express, { Application } from 'express';
import sequelize from '../db/connection';
import routesGets from '../routes/gets';
import routesPosts from '../routes/posts';
import { Client, FixedPhone, Phone } from './clients';
import {User} from './user'
import cors from 'cors';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080'

        this.listen()
        this.midlewares()

        this.routes()
        this.dbConnect()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Escuchando puerto", + this.port)
        })
    }

    routes() {
        this.app.use('/api/getClients', routesGets)
        this.app.use('/api/new', routesPosts)

    }

    midlewares() {
        this.app.use(express.json())
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await Client.sync();
            await User.sync();
            await Phone.sync();
            await FixedPhone.sync();
            
        } catch (err) {
            console.log("Unable to connect yo the database: ", err)
        }
    }
}

export default Server;

