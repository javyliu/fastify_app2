
exports.up = function(knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id");
    table.string("title", 255);
    table.text("content");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("udpated_at").defaultTo(knex.fn.now());

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("posts");
};
