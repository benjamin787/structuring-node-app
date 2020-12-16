
exports.up = function(knex) {
  return knex.schema.createTable('dogs', table => {
    table.increments('id');
    table.string('name');
    table.integer('age');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('dogs');
};
