
exports.seed = function(knex) {
  return knex('dogs').del()
    .then(function () {
      return knex('dogs').insert([
        { name: 'Bixby', age: 26 },
        { name: 'Pepper', age: 12 },
        { name: 'Lima', age: 5 }
      ]);
    });
};
