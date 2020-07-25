const mongoose = require('mongoose')
require('dotenv').config()
const { env } = process;
const DB_URL = `mongodb://${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`
console.log(DB_URL)
const db = {}
db.connect = () => {
    mongoose.Promise = global.Promise;
    // Connecting to the database
    mongoose
        .connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log("Successfully connected to the database");
        })
        .catch((err) => {
            console.log(`Could not connect to the database. Exiting now...\n${err}`);
            process.exit();
        });
}

module.exports = db