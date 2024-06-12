/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('users')
    .then((exist) => {
        if (!exist) {
            return knex.schema.createTable('users', function(table) {
                table.string('last_name').nullable().alter();
                table.string('nickname').nullable().alter();
                table.string('phone').nullable().alter();
                table.integer('age').nullable().alter();
                table.float('height').nullable().alter();
                table.string('position').nullable().alter();
                table.integer('goals').nullable().defaultTo(0).alter();
                table.enu('handedness', ['left', 'right']).nullable().alter();
                table.string('address').nullable().alter();
                table.string('city').nullable().alter();
                table.string('state').nullable().alter();
                table.string('country').nullable().alter();
                table.string('postal_code').nullable().alter();
                table.string('avatar_url').nullable().alter();
                table.timestamp('last_login').nullable().alter();
            });
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.string('last_name').notNullable().alter();
        table.string('nickname').notNullable().alter();
        table.string('phone').notNullable().alter();
        table.integer('age').notNullable().alter();
        table.float('height').notNullable().alter();
        table.string('position').notNullable().alter();
        table.integer('goals').notNullable().defaultTo(0).alter();
        table.enu('handedness', ['left', 'right']).notNullable().alter();
        table.string('address').notNullable().alter();
        table.string('city').notNullable().alter();
        table.string('state').notNullable().alter();
        table.string('country').notNullable().alter();
        table.string('postal_code').notNullable().alter();
        table.string('avatar_url').notNullable().alter();
        table.timestamp('last_login').notNullable().alter();
    });
};
