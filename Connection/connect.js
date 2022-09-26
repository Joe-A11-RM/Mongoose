let mongoose = require("mongoose")
const server = '127.0.0.1:27017'
const database = 'admin'
class Database {
    constructor() {}
    connect() {
        mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log("Database Connection Successfull")
            }).catch((err) => {
                console.log("Database Connection Error")
            })
    }
}
module.exports = new Database()