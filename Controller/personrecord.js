let PersonRecord = require('../Model/person')
class Person {
    constructor() {

    }
    add() {
        let msg = new PersonRecord({
            name: 'Yasser',
            age: 29,
            favoriteFoods: ['Pizza', 'Shrimp', 'Salad']
        })
        msg.save().then(doc => {
            console.log(doc)
        }).catch(err => {
            console.log(err)
        })
    }
    async createmany() {
        await PersonRecord.create([
            { name: 'Mary', age: 18, favoriteFoods: ['Fruit', 'Rice', 'Burritos'] },
            { name: 'Adam', age: 30, favoriteFoods: ['Burritos', 'Shrimp', 'Salad'] },
            { name: 'Omar', age: 30, favoriteFoods: ['Pizza', 'Burritos', 'Salad'] }
        ]).then(doc => {
            console.log(doc)
        }).catch(err => {
            console.error(err)
        })
    }

    findAll() {
        PersonRecord.find({
            name: "Yousef"
        }).then(doc => {
            console.log(doc)
        }).catch(err => {
            console.error(err)
        })

    }

    findOne() {
        PersonRecord.findOne({
            favoriteFoods: ['Pizza', 'Burritos', 'Salad']
        }).then(doc => {
            console.log(doc)
        }).catch(err => {
            console.error(err)
        })
    }

    findbyID() {
        PersonRecord.findById({
            _id: '6330e4209046932f96755220'
        }).then(doc => {
            console.log(doc)
        }).catch(err => {
            console.error(err)
        })
    }

    classicUpdate() {
        PersonRecord.findById({
            _id: '6330e4209046932f96755220'
        }).update({
            $push: { favoriteFoods: "Fruits" }
        }).then(doc => {
            console.log(doc)
        }).catch(err => {
            console.error(err)
        })
    }
    findOneUpdate() {
        PersonRecord.findOneAndUpdate({
            name: "Ali"
        }, {
            age: 20
        }, {
            new: true
        }).then(doc => {
            console.log(doc)
        }).catch(err => {
            console.error(err)
        })
    }
    findOneDelete() {
        PersonRecord.findByIdAndRemove({
            _id: '6331ec83140864a5100eb8d4'
        }).then(() => {
            console.log("Query Deleted Successfully")
        }).catch(err => {
            console.error(err)
        })
    }

    DeleteAll() {
        PersonRecord.remove({
            name: 'Mary'
        }).then(count => {
            console.log(count)

        }).catch(err => {
            console.error(err)
        })
    }

    ChainSearch() {
        PersonRecord.find({
                favoriteFoods: 'Burritos'
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