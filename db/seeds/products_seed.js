
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { id: 1, name: 'toyota tacoma', price: 25000, inventory: 9 },
        { id: 2, name: 'toyota 4runner', price: 32000, inventory: 15 },
        {id: 3, name: 'toyota tundra', price: 37000, inventory: 4},
      ]);
    });
};
