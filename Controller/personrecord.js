let PersonRecord = require('../Model/person')
const prompt = require('prompt-sync')();

class Person {
    constructor() {

    }
    add() {
        var commandfood = []
        var size = 3
        const commandname = prompt('Enter Your Name');
        const commandage = prompt('Enter Your age');
        for (var i = 0; i < size; i++) {
            commandfood[i] = prompt('Enter Your Food');
        }
        let msg = new PersonRecord({
            name: commandname,
            age: commandage,
            favoriteFoods: commandfood
        })
        msg.save().then(doc => {
            console.log(doc)
        }).catch(err => {
            console.log(err)
        })
    }
    async createmany() {
        var commandfood = []
        var size = 3
        const commandname = prompt('Enter Your Name');
        const commandage = prompt('Enter Your age');
        for (var i = 0; i < size; i++) {
            commandfood[i] = prompt('Enter Your Food');
        }
        await PersonRecord.create([
            { name: commandname, age: commandage, favoriteFoods: commandfood },
            { name: commandname, age: commandage, favoriteFoods: commandfood },
            { name: commandname, age: commandage, favoriteFoods: commandfood }
        ]).then(doc => {
            console.log(doc)
        }).catch(err => {
            console.error(err)
        })
    }

    findAll() {
        const commandname = prompt('Enter Name You Want To Search For :');
        PersonRecord.find({
            name: commandname
        }).then(doc => {
            console.log(doc)
        }).catch(err => {
            console.error(err)
        })

    }

    findOne() {
        const commandfood = prompt('Enter Food You Want To Search For :')
        PersonRecord.findOne({
            favoriteFoods: commandfood
        }).then(doc => {
            console.log(doc)
        }).catch(err => {
            console.error(err)
        })
    }

    findbyID() {
        const commandId = prompt('Enter ID : ')
        PersonRecord.findById({
            _id: commandId
        }).then(doc => {
            console.log(doc)
        }).catch(err => {
            console.error(err)
        })
    }

    classicUpdate() {
        const commandId = prompt('Enter ID : ')
        const commandfood = prompt('Add Food :')
        PersonRecord.findById({
            _id: commandId
        }).update({
            $push: { favoriteFoods: commandfood }
        }).then(doc => {
            console.log(doc)
        }).catch(err => {
            console.error(err)
        })
    }
    findOneUpdate() {
        const commandname = prompt('Enter Name You Want To Search For : ')
        const commandage = prompt('Enter The New Age : ')
        PersonRecord.findOneAndUpdate({
            name: commandname
        }, {
            age: commandage
        }, {
            new: true
        }).then(doc => {
            console.log(doc)
        }).catch(err => {
            console.error(err)
        })
    }
    findOneDelete() {
        const commandId = prompt('Enter ID  You Want To Remove: ')
        PersonRecord.findByIdAndRemove({
            _id: commandId
        }).then(() => {
            console.log("Query Deleted Successfully")
        }).catch(err => {
            console.error(err)
        })
    }

    DeleteAll() {
        const commandname = prompt('Enter Name You Want To Delete : ')
        PersonRecord.remove({
            name: commandname
        }).then(count => {
            console.log(count)

        }).catch(err => {
            console.error(err)
        })
    }

    ChainSearch() {
        const commandfood = prompt('Enter Food You Want To Search For :')
        PersonRecord.find({
                favoriteFoods: commandfood
            }).sort({ name: 1 })
            .limit(2)
            .select({ name: true })
            .exec().then(doc => {
                console.log(doc)
            }).catch(err => {
                console.error(err)
            })
    }
}

module.exports = new Person()