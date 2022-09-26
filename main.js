const databaseconnection = require('./Connection/connect')
const PersonRecord = require('./Controller/personrecord')
const prompt = require('prompt-sync')();
databaseconnection.connect()
const command = prompt('Enter Your Choice');
switch (command) {
    case "Add":
        PersonRecord.add()
        break;
    case "CreateMany":
        PersonRecord.createmany()
        break;
    case "FindAll":
        PersonRecord.findAll()
        break;
    case "FindByID":
        PersonRecord.findbyID()
        break;
    case "FindOne":
        PersonRecord.findOne()
        break;
    case "ClassicUpdate":
        PersonRecord.classicUpdate()
        break;
    case "FindOneAndUpdate":
        PersonRecord.findOneUpdate()
        break;
    case "FindOneAndDelete":
        PersonRecord.findOneDelete()
        break;
    case "DeleteAll":
        PersonRecord.DeleteAll()
        break;
    case "ChainSearch":
        PersonRecord.ChainSearch()
        break;
    default:
        break;
}
/*PearsonRecord.add()
PearsonRecord.createmany()
PearsonRecord.findAll()
PearsonRecord.findbyID()
PearsonRecord.findOne()
PearsonRecord.classicUpdate()
PearsonRecord.findOneUpdate()
PearsonRecord.findOneDelete()
PearsonRecord.DeleteAll()
PearsonRecord.ChainSearch()*/