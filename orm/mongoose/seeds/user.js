//Dependencies
const faker = require('faker'); // fake data API
const documents = []; // seed object

//Global Constants
const documentQty = 10; // documents to create

// Load seed data
const createFake = () => ({
    first_name: faker.name.findName(),
    last_name: faker.name.findName(),
    email: faker.internet.email(),
    note: faker.company.catchPhrase(),
});

for (let i = 0; i < documentQty; i++) {
    documents.push(createFake());
};

module.exports = documents;
