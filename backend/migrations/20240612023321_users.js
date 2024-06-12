/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('users')
    .then((exist) => {
        if (!exist) {
            return knex.schema.createTable('users', function(table) {
                table.increments('user_id').primary();
                table.string('first_name').notNullable();
                table.string('last_name').notNullable();
                table.string('nickname').nullable();
                table.string('phone').notNullable().unique();
                table.string('email').notNullable().unique();
                table.string('password').notNullable();
                table.boolean('captain').notNullable().defaultTo(false);
                table.boolean('admin').notNullable().defaultTo(false);
                table.integer('age').notNullable();
                table.float('height').notNullable();
                table.string('position').notNullable();
                table.integer('goals').notNullable().defaultTo(0);
                table.enu('handedness', ['left', 'right']).notNullable();
                table.boolean('is_active').notNullable().defaultTo(true);
                table.string('address').nullable();
                table.string('city').nullable();
                table.string('state').nullable();
                table.string('country').nullable();
                table.string('postal_code').nullable();
                table.string('avatar_url').nullable();
                table.timestamp('last_login').nullable();
                table.enu('role', ['player', 'captain', 'admin']).notNullable().defaultTo('player');
                table.timestamps(true, true);
            });
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
};
