// 'use strict'
// // fake data creation process
// const faker = require('faker');
// const createFake = () => ({
//   email: faker.internet.email(),
//   first_name: faker.name.firstName(),
//   last_name: faker.name.lastName()
// });

// exports.seed = function (knex) {
//   // fake data loop
//   const fakeUsers = [];
//   const fakeQty = 100;
//   for (let i = 0; i < fakeQty; i++) {
//     fakeUsers.push(createFake());
//   }
//   // Deletes ALL existing entries
//   return knex('user').del()
//     .then(function () {
//       // Inserts seed entries
//       console.log(fakeUsers);
//       return knex('user').insert(fakeUsers);
//     });
// };