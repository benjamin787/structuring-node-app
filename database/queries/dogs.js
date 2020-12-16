const database = require('../database')

module.exports = {
    getAll() {
        return database('dogs')
    },

    addDog(requestBody) {
        const { name, age } = requestBody;
        return database('dogs')
            .insert({ name, age })
            .returning(['name', 'age'])
    }
}