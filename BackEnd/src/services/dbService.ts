const { Client } = require('node-postgres');
const dbName: string = "webapplication"; //TODO .envFile
const dbPass: string = "postgres"; //TODO .envFile
var client = null;

export default {

    async connect() {

        if (client) {
            console.log("Already Connected");
            return client;
        }

        if (!client) {
            console.log("First Connection 1.1");

            client = new Client({
                user: 'postgres',
                host: '127.0.0.1',
                database: dbName,
                password: dbPass,
                port: 5432,
            });
            await client.connect();
            return client;
        }

    },
    async disconnect() {
        if (!client) {
            return true;
        }
        await client.end();
        client = null;
        return true;
    }
};