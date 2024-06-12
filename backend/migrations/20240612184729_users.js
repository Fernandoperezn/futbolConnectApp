/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('users')
        .then((exist) => {
            if (!exist) {
                return knex.schema.createTable('users', (table) =>{
                    table.increments('user_id').primary();
                    table.string('first_name').nullable();
                    table.string('last_name').nullable();
                    table.string('nickname').nullable();
                    table.string('phone').nullable().unique();
                    table.string('email').notNullable().unique();
                    table.string('password').notNullable();
                    table.boolean('captain').notNullable().defaultTo(false);
                    table.boolean('admin').notNullable().defaultTo(false);
                    table.integer('age').nullable();
                    table.float('height').nullable();
                    table.string('position').nullable();
                    table.integer('goals').nullable().defaultTo(0);
                    table.enu('handedness', ['left', 'right']).nullable();
                    table.boolean('is_active').notNullable().defaultTo(true);
                    table.string('address').nullable();
                    table.string('city').nullable();
                    table.string('state').nullable();
                    table.string('country').nullable();
                    table.string('postal_code').nullable();
                    table.string('avatar_url').nullable();
                    table.timestamp('last_login').nullable();
                    table.enu('role', ['player', 'captain', 'admin']).notNullable().defaultTo('player');
                    table.string('profile_picture_url').nullable();
                    table.date('date_of_birth').nullable();
                    table.integer('assists').nullable().defaultTo(0);
                    table.integer('yellow_cards').nullable().defaultTo(0);
                    table.integer('red_cards').nullable().defaultTo(0);
                    table.text('bio').nullable();
                    table.timestamps(true, true);
                })
            }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
