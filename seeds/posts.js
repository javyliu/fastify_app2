
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 2, title: 'rowValue2', content: 'test1'},
        {id: 1, title: 'rowValue1', content: 'test2'},
        {id: 3, title: 'rowValue3', content: 'test3'}
      ]);
    });
};
